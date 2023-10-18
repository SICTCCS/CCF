from tkinter import Button, Listbox, OptionMenu, StringVar, Text, Tk, Label, messagebox
from tkinter import filedialog
#from PIL import Image, ImageTk
from classes.firebase import FirebaseClass
import sys

class WindowClass:
    # Creates and calls functions.
    def __init__(self):
        self.firebase = FirebaseClass()
        self.tk = Tk()
        self.remember = []
        self.startup()
        self.showItems()
        self.tk.mainloop()
    
    #Sets up basic settings for window.
    def startup(self):
        self.tk.title("CCF Manager")
        self.tk.resizable(False,False)
        #https://stackoverflow.com/questions/14900510/changing-the-application-and-taskbar-icon-python-tkinter
        '''try:
            #Runs if ran through python.
            self.tk.iconbitmap(default="./../images/logo.ico")
        except:
            #Runs if ran through .exe.
            self.tk.iconbitmap(default=f"{sys._MEIPASS}/logo.ico")
        '''
        #widgets
        #This is odd but not much I can do. I recommend reading up on https://stackoverflow.com/questions/13148975/tkinter-label-does-not-show-image
        '''try:
            #Runs if ran through python.
            self.img = Image.open("./../images/logo.png").convert("RGBA")
        except:
            #Runs if ran through .exe.
            self.img = Image.open(f"{sys._MEIPASS}/logo.png").convert("RGBA")
            '''
        # self.img = ImageTk.PhotoImage(self.img.resize([self.img.size[0]//15,self.img.size[1]//15]))
        #self.addToGrid(Label(self.tk,image=self.img,bg="black"),0,0,3)
        #self.addToGrid(Label(self.tk,text="College Career Fair Manager",bg="black",fg="white",font=("ArialBold",15)),1,0,3)

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

    #Select file and upload to firebase.
    def select_file(self):
        file = filedialog.askopenfile(title='Open a file',initialdir='/',filetypes=(('tsv', '*.tsv'),('All files', '*.*')))
        self.firebase.uploadTSV(file.name)

    #Destroy current items in window and run startup again. Will call function after.
    def newWindow(self,fun):
        self.remember = []
        for widget in self.tk.winfo_children():
            widget.destroy()
        self.startup()
        fun()
    
    #Delete prompt
    def select(self,evt):
        #https://www.geeksforgeeks.org/how-to-create-a-pop-up-message-when-a-button-is-pressed-in-python-tkinter/
        if messagebox.askyesno(title="Are you sure?",message=f"Delete {evt.widget.get(evt.widget.curselection()[0])}?"):
            self.firebase.delItemFromIndex(evt.widget.curselection()[0])
            self.newWindow(self.showItems)

    #Firebase item list screen.
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

    #Interest list with count from firebase.
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

    # Save file to os.
    def saveFile(self,text):
        file = filedialog.asksaveasfile(title='Open a file',initialdir='/',filetypes=(('txt', '*.txt'),('All files', '*.*')))
        open(file.name+".txt","w").write(text)

    #Add to grid and be able to call it later through the remember variable.
    def addToGridRemember(self,name,widget,row,column,columnspan=1,sticky="news"):
        self.remember.append([name,widget])
        widget.grid(row=row,column=column,columnspan=columnspan,sticky=sticky)

    #Add to grid without remembering.
    def addToGrid(self,widget,row,column,columnspan=1,sticky="news"):
        widget.grid(row=row,column=column,columnspan=columnspan,sticky=sticky)

    #Runs when submit is hit on add card screen.
    def submit(self):
        data = {}
        for i in self.remember:
            data[i[0]] = i[1].get("1.0",'end-1c')
            i[1].delete("1.0","end")
        data["type"] = self.type.get()
        self.firebase.new(data)

    #Goodbye
    def exit(self):
        self.tk.destroy()