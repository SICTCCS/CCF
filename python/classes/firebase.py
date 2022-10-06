#https://www.freecodecamp.org/news/how-to-get-started-with-firebase-using-python/
from time import time
from firebase_admin import initialize_app, credentials, db
import sys
valid = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

class FirebaseClass:
    def __init__(self):
        try:
            self.default_app = initialize_app(credentials.Certificate('./private/private.json'),{'databaseURL': "https://sictc-career-fair-default-rtdb.firebaseio.com/"})
        except:
            self.default_app = initialize_app(credentials.Certificate(f"{sys._MEIPASS}/private.json"),{'databaseURL': "https://sictc-career-fair-default-rtdb.firebaseio.com/"})
    
    #https://www.geeksforgeeks.org/how-to-convert-python-dictionary-to-json/
    def new(self,dict):
        name = ""
        for i in dict['name']:
            if i in valid:
                name+=i
        ref = db.reference(f"/Items/{name}")
        for i in dict.keys():
            ref.child(i).set(dict[i])
    
    def getItems(self):
        tempdata = db.reference(f"/Items").get(True)
        data = []
        for i in tempdata[0]:
            data.append(str(tempdata[0][i]["name"]))
        return data
    
    def delItemFromIndex(self,index):
        tempdata = db.reference(f"/Items").get(True)
        db.reference(f"/Items/{list(tempdata[0].keys())[index]}").delete()
    
    def uploadCSV(self,file):
        data = open(file,encoding="utf-8").read().split("\n")
        db.reference("/Items").delete()
        for i in data:
            if i.startswith("Name of Organization"):
                continue
            i = i.split('\t')
            if len(i) == 1 or not i[7] == "x" or not i[6] == "x":
                continue
            #Name of Organization,Interest Area,Desc,picture url,website,college/company/military,Completed?,On Website
            #0 Name, 3 Logo URL, 4 Website, 2 Desc, 1 Interests, 5 Type
            tempdata={}
            tempdata["name"] = i[0]
            tempdata["logo"] = i[3]
            if tempdata["logo"] == "0":
                tempdata["logo"]=""
            tempdata["web"] = i[4]
            tempdata["desc"] = i[2]
            current = 0
            for interest in i[1].split(","):
                if interest == "x":
                    continue
                current+=1
                if current > 5:
                    continue
                tempdata["ia"+str(current)] = interest
            for n in range(5):
                if not "ia"+str(n+1) in tempdata.keys():
                    tempdata["ia"+str(n+1)] = ""
            tempdata["type"] = i[5].capitalize()
            if tempdata["type"] == "0":
                tempdata["type"]="Company"
            self.new(tempdata)
        