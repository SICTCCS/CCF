# CCF
Career Fair Official Site

# Python Tool - firebase.py

Need to import firebase_admin and sys. Firebase is the database that CCF uses and sys allows us to get the path for the compiled exe temp folder.
```
from firebase_admin import initialize_app, credentials, db
import sys
```

* Valid characters that can be pushed to firebase as the name. Firebase will organize it alphabetically.
```
valid = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
```

* I've decided to put firebase in a class just for organization but it isn't required.
```
class FirebaseClass:
```

* This is what the class runs when it is first made.
* default_app is where the initalized firebase is stored. This can be called anywhere in the class file with self.default_app.
* Cerficate is stored in private folder in private.json. If you don't have this you should ask Bander.
```
    def __init__(self):
        try:
            self.default_app = initialize_app(credentials.Certificate('./private/private.json'),{'databaseURL': "https://sictcccf-default-rtdb.firebaseio.com/"})
        except:
            self.default_app = initialize_app(credentials.Certificate(f"{sys._MEIPASS}/private.json"),{'databaseURL': "https://sictcccf-default-rtdb.firebaseio.com/"})
```

* New is given a dictionary. That dictionary is searched through for the name value and that's what the firebase sets the name as. Everything else is appended under the name in the database.
```
    def new(self,dict):
        name = ""
        for i in dict['name']:
            if i in valid:
                name+=i
        ref = db.reference(f"/Items/{name}")
        for i in dict.keys():
            ref.child(i).set(dict[i])
```

* 
```
    def getItems(self):
        tempdata = db.reference(f"/Items").get(True)
        data = []
        for i in tempdata[0]:
            try:
                data.append(str(tempdata[0][i]["name"]))
            except:
                print("Failed at",i,"in get items.")
        return data
```

```
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
```

```
    #Delete card.
    def delItemFromIndex(self,index):
        tempdata = db.reference(f"/Items").get(True)
        db.reference(f"/Items/{list(tempdata[0].keys())[index]}").delete()
```

```
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
```

```
from tkinter import Button, Listbox, OptionMenu, StringVar, Text, Tk, Label, messagebox
from tkinter import filedialog
from PIL import Image, ImageTk
from classes.firebase import FirebaseClass
import sys
```

```
class WindowClass:
```

```
    # Creates and calls functions.
    def __init__(self):
        self.firebase = FirebaseClass()
        self.tk = Tk()
        self.remember = []
        self.startup()
        self.showItems()
        self.tk.mainloop()
```

```
    #Sets up basic settings for window.
    def startup(self):
        self.tk.title("CCF Manager")
        self.tk.resizable(False,False)
        #https://stackoverflow.com/questions/14900510/changing-the-application-and-taskbar-icon-python-tkinter
        try:
            #Runs if ran through python.
            self.tk.iconbitmap(default="./../images/logo.ico")
        except:
            #Runs if ran through .exe.
            self.tk.iconbitmap(default=f"{sys._MEIPASS}/logo.ico")

        #widgets
        #This is odd but not much I can do. I recommend reading up on https://stackoverflow.com/questions/13148975/tkinter-label-does-not-show-image
        try:
            #Runs if ran through python.
            self.img = Image.open("./../images/logo.png").convert("RGBA")
        except:
            #Runs if ran through .exe.
            self.img = Image.open(f"{sys._MEIPASS}/logo.png").convert("RGBA")
        self.img = ImageTk.PhotoImage(self.img.resize([self.img.size[0]//15,self.img.size[1]//15]))
        self.addToGrid(Label(self.tk,image=self.img,bg="black"),0,0,3)
        self.addToGrid(Label(self.tk,text="College Career Fair Manager",bg="black",fg="white",font=("ArialBold",15)),1,0,3)
```

```
    #Screen to add a card to firebase.
    def addItem(self):
        self.type = StringVar(value="College")
        #https://www.pythontutorial.net/tkinter/tkinter-open-file-dialog/
        self.addToGrid(Button(self.tk,text="Clear Firebase and Upload TSV",bg="black",fg="red",command=lambda:self.select_file()),2,0,3)
        self.addToGrid(Label(self.tk,text="Name"),3,0)
        self.addToGridRemember("name",Text(self.tk,height=3),3,1)
        self.addToGrid(Label(self.tk,text="Logo URL"),4,0)
        self.addToGridRemember("logo",Text(self.tk,height=3),4,1)
        self.addToGrid(Label(self.tk,text="Website URL"),5,0)
        self.addToGridRemember("web",Text(self.tk,height=3),5,1)
        self.addToGrid(Label(self.tk,text="Description"),6,0)
        self.addToGridRemember("desc",Text(self.tk,height=3),6,1)
        self.addToGrid(Label(self.tk,text="Interest Areas"),7,0,3)
        for i in range(5):
            self.addToGrid(Label(self.tk,text=i+1),8+i,0)
            self.addToGridRemember(f"ia{i+1}",Text(self.tk,height=3),8+i,1)
        self.addToGrid(Label(self.tk,text="Type"),998,0)
        self.addToGrid(OptionMenu(self.tk,self.type,*["College","Company","Military"]),998,1,2)
        self.addToGrid(Button(self.tk,text="Submit",bg="darkgreen",fg="lime",command=self.submit),999,0,3)
        self.addToGrid(Button(self.tk,text="Item List",bg="black",fg="yellow",command=lambda:self.newWindow(self.showItems)),1000,0,3)
```

```
    #Select file and upload to firebase.
    def select_file(self):
        file = filedialog.askopenfile(title='Open a file',initialdir='/',filetypes=(('tsv', '*.tsv'),('All files', '*.*')))
        self.firebase.uploadTSV(file.name)
```

```
    #Destroy current items in window and run startup again. Will call function after.
    def newWindow(self,fun):
        self.remember = []
        for widget in self.tk.winfo_children():
            widget.destroy()
        self.startup()
        fun()
```

```
    #Delete prompt
    def select(self,evt):
        #https://www.geeksforgeeks.org/how-to-create-a-pop-up-message-when-a-button-is-pressed-in-python-tkinter/
        if messagebox.askyesno(title="Are you sure?",message=f"Delete {evt.widget.get(evt.widget.curselection()[0])}?"):
            self.firebase.delItemFromIndex(evt.widget.curselection()[0])
            self.newWindow(self.showItems)
```

```
    #Gets items for item list screen.
    def showItems(self):
        #https://www.tutorialspoint.com/python/tk_listbox.htm
        items = self.firebase.getItems()
        listBar = Listbox(self.tk,width=70,height=35)
        for i in items:
            listBar.insert("end",i)
        #https://stackoverflow.com/questions/6554805/getting-a-callback-when-a-tkinter-listbox-selection-is-changed
        listBar.bind('<<ListboxSelect>>', self.select)
        self.addToGrid(listBar,3,0)
        self.addToGrid(Button(self.tk,text="Interests",bg="black",fg="yellow",command=lambda:self.newWindow(self.showInterests)),4,0)
        self.addToGrid(Button(self.tk,text="Add Card",bg="black",fg="yellow",command=lambda:self.newWindow(self.addItem)),5,0)
```

```
    #Gets interests for item list screen.
    def showInterests(self):
        #https://www.tutorialspoint.com/python/tk_listbox.htm
        items = self.firebase.getInterests()
        listBar = Listbox(self.tk,width=70,height=35)
        output = ""
        for i in items:
            listBar.insert("end",i+" x"+str(items[i]))
            output+=i+" x"+str(items[i])+"\n"
        self.addToGrid(Button(self.tk,text="Save as File",bg="black",fg="red",command=lambda:self.saveFile(output)),3,0)
        self.addToGrid(listBar,4,0)
        self.addToGrid(Button(self.tk,text="Cards",bg="black",fg="yellow",command=lambda:self.newWindow(self.showItems)),5,0)
        self.addToGrid(Button(self.tk,text="Add Card",bg="black",fg="yellow",command=lambda:self.newWindow(self.addItem)),6,0)
```

```
    def saveFile(self,text):
        file = filedialog.asksaveasfile(title='Open a file',initialdir='/',filetypes=(('txt', '*.txt'),('All files', '*.*')))
        open(file.name+".txt","w").write(text)
```

```
    #Add to grid and be able to call it later through the remember variable.
    def addToGridRemember(self,name,widget,row,column,columnspan=1,sticky="news"):
        self.remember.append([name,widget])
        widget.grid(row=row,column=column,columnspan=columnspan,sticky=sticky)
```

```
    #Add to grid without remembering.
    def addToGrid(self,widget,row,column,columnspan=1,sticky="news"):
        widget.grid(row=row,column=column,columnspan=columnspan,sticky=sticky)
```

```
    #Runs when submit is hit on add card screen.
    def submit(self):
        data = {}
        for i in self.remember:
            data[i[0]] = i[1].get("1.0",'end-1c')
            i[1].delete("1.0","end")
        data["type"] = self.type.get()
        self.firebase.new(data)
```

```
    #Goodbye
    def exit(self):
        self.tk.destroy()
```
