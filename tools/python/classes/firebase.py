#https://www.freecodecamp.org/news/how-to-get-started-with-firebase-using-python/
from firebase_admin import initialize_app, credentials, db
import sys

#Valid characters for firebase names.
valid = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

class FirebaseClass:
    def __init__(self):
        #try:
            #Runs if ran with python.
        self.default_app = initialize_app(credentials.Certificate('./private/private.json'),{'databaseURL': "https://fir-6c37f-default-rtdb.firebaseio.com"})
        #except:
            #Runs if ran from .exe.
            #self.default_app = initialize_app(credentials.Certificate(f"{sys._MEIPASS}/private.json"),{'databaseURL': "https://fir-6c37f-default-rtdb.firebaseio.com"})
    
    #Adds new card.
    def new(self,dict):
        name = ""
        for i in dict['name']:
            if i in valid:
                name+=i
        ref = db.reference(f"/Items/{name}")
        for i in dict.keys():
            ref.child(i).set(dict[i])
    
    #Creates list of cards.
    def getItems(self):
        tempdata = db.reference(f"/Items").get(True)
        data = []
        for i in tempdata[0]:
            try:
                data.append(str(tempdata[0][i]["name"]))
            except:
                print("Failed at",i,"in get items.")
        return data
    
    #Gets dictionary of interests
    def getInterests(self):
        tempdata = db.reference(f"/Items").get(True)
        unique = {}
        for i in tempdata[0]:
            for j in range(5):
                type = tempdata[0][i][f"ia{j+1}"].strip()
                if type == "":
                    continue
                if type in unique:
                    unique[type]+=1
                else:
                    unique[type]=1
        #https://stackoverflow.com/questions/613183/how-do-i-sort-a-dictionary-by-value
        temp = sorted(unique.items(), key=lambda item: item[1])
        temp.reverse()
        unique = dict(temp)
        return unique
    
    #Delete card.
    def delItemFromIndex(self,index):
        tempdata = db.reference(f"/Items").get(True)
        db.reference(f"/Items/{list(tempdata[0].keys())[index]}").delete()
    
    #Upload TSV. (this breaks very easily from minor changes)
    def uploadTSV(self,file):
        data = open(file,encoding="utf-8").read().split("\n")
        db.reference("/Items").delete()
        for i in data:
            if i.startswith("Name of Organization"):
                continue
            i = i.split('\t')
            if len(i) == 1 or i[0] == "x" or i[0] == "":
                continue
            #Name of Organization,Interest Area,Desc,picture url,website,college/company/military,Completed?,On Website
            #0 Name, 3 Logo URL, 4 Website, 2 Desc, 1 Interests, 5 Type
            tempdata={}
            tempdata["name"] = i[0].strip()
            tempdata["logo"] = i[3].strip()
            if tempdata["logo"] == "0":
                tempdata["logo"]=""
            tempdata["web"] = i[4].strip()
            if len(tempdata["web"]) > 1 and not tempdata["web"].startswith("http"):
                tempdata["web"] = "https://"+tempdata["web"].strip()
            tempdata["desc"] = i[2].strip()
            current = 0
            for interest in i[1].split(","):
                if interest == "x":
                    continue
                current+=1
                if current > 5:
                    continue
                tempdata["ia"+str(current)] = interest.strip()
            for n in range(5):
                if not "ia"+str(n+1) in tempdata.keys():
                    tempdata["ia"+str(n+1)] = ""
            tempdata["type"] = i[5].capitalize().strip()
            if tempdata["type"] == "0":
                tempdata["type"]="Company"
            self.new(tempdata)