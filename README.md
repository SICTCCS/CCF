# CCF

# How to get private.json

* Gear Icon -> Project Settings -> Service Accounts -> Generate new private key

![image](https://user-images.githubusercontent.com/91961334/200907431-7ac2dd2b-4d10-4275-b0f6-b86223fe67a6.png)

* You need a private folder if you don't already have one.

![image](https://user-images.githubusercontent.com/91961334/202522154-8a64c792-246c-4509-b2d9-ec977fc5656d.png)

* You'll need to rename the file to "private.json".

![image](https://user-images.githubusercontent.com/91961334/202522325-ef452d66-10bb-4e01-998a-31fbdd7aea10.png)

**DO NOT PUSH THIS TO A PUBLIC GITHUB**

# Run python tool

* Run the python script with py

![image](https://user-images.githubusercontent.com/91961334/202524230-189af745-26ac-4c82-87f3-b9a2aebc332e.png)

**OR**

* First get pyinstaller by running "pip install pyinstaller" then run build.bat

![image](https://user-images.githubusercontent.com/91961334/202524328-d6d9a6ff-a2c0-4acf-bdc5-daded166f1c8.png)

* Enter the dist directory.

![image](https://user-images.githubusercontent.com/91961334/202524395-24d0d2f8-57bc-47bf-8d9d-218665c09380.png)

* Wait for batch to finish and an .exe should appear.

![image](https://user-images.githubusercontent.com/91961334/202524433-82e311c5-301f-48e8-8e3e-97edc6da7bcc.png)

**DO NOT PUSH THIS TO A PUBLIC GITHUB**

# How to get .tsv

* Open google sheet and click on file. Hover over the download button and select TSV.

![image](https://user-images.githubusercontent.com/91961334/202525630-12bb9bf0-1868-4c86-bf37-5667240c1852.png)

# Uploading .tsv to firebase

* Click "Add Card"

![image](https://user-images.githubusercontent.com/91961334/202525101-c4673415-816d-4cfd-9965-cfb34bc0303e.png)

* Click "Clear Firebase and Upload TSV"

![image](https://user-images.githubusercontent.com/91961334/202525249-7a978de6-6d0f-4a0a-ab80-a6b785458134.png)

# Enable Auth (NOT REQUIRED)
This method was used for the addCard.html but is not required for the python script.

1. Enable authentication service on firebase. (it is separate from the realtime database)

![image](https://user-images.githubusercontent.com/91961334/200909413-02578e34-285e-4de4-b733-43bb4840a4d4.png)

2. Enable email only (under Sign-in method) and setup a dummy account (under users). This doesn't need to be a real email.

![image](https://user-images.githubusercontent.com/91961334/200909681-1796411f-792e-4449-8859-2ffd076926d6.png)

3. Change the realtime database rules to allow for auth users to make changes.

![image](https://user-images.githubusercontent.com/91961334/200909004-7da2e969-4d51-4e36-a2d2-7349e2b2c747.png)

4. Add your information to the addCard.html. **DO NOT PUSH THIS TO A PUBLIC GITHUB**


# nathan doc get.js

# init firebase
* initialize fire base database

![image](https://github.com/SICTCCS/CCF/blob/87e620f3e2dac1b37c6a786672d60efd7f1d06ea/images/firebase.PNG)

# functions for site

* add all function this will be called auto to load everything from firebase server in order to show all 

![image](https://github.com/SICTCCS/CCF/blob/main/images/addall.PNG)


* then is is one of the 4 function used to sort by intrests they are all almost the same just detect different types 

![image](https://github.com/SICTCCS/CCF/blob/main/images/addC.PNG)


* next is a function that will if they use search it will sort through all data and if name type or dec match at all it will show it


![image](https://github.com/SICTCCS/CCF/blob/main/images/search.PNG)

# Website start up

* this will run to set up all the button ready to be clicked and load the allall showing all the base information

![image](https://github.com/SICTCCS/CCF/blob/main/images/load.PNG)

* then a button was create in oder to remove the annying ness of haveing to click the search icon every time so that if you clicked enter it would load

![image](https://github.com/SICTCCS/CCF/blob/main/images/enter.PNG)

# Add Card

* This is what will make and append the divs to the main
* First this will go through the data it was given and create the baic div template then chect the data for its type and add that to the template and set default image 

![image](https://github.com/SICTCCS/CCF/blob/main/images/addcardp1.PNG)

* Then it will finish the base div template
* after that it will sort through and through a conditional check how many intress there are and after getting amout of intress it will add each on to the intress sections 
* finaly append the div create to the main div this all will repeat for every item that passed the sort opetion the user picks through
![image](https://github.com/SICTCCS/CCF/blob/main/images/addCardp2.PNG)

# to top btn

* A simple button that will show when scrolled slightly down it will add a fast animation to to seting the scrolltop to 0
![image](https://github.com/SICTCCS/CCF/blob/main/images/scroll.PNG)

# Querry tags

* this is used to save info to the search bar so if the user reload the page it will save there search and re do it
* it was also made to be able to send the link while something is looked up and it to still be the way they sent it

![image](https://github.com/SICTCCS/CCF/blob/main/images/tags.PNG)

# dark/light mode

* this will invert the color of everything to make them dark or light depenting what they where befor they click then set button logo to a sun or moon 
1. sets the consts that will be set to or inverted from
![image](https://github.com/SICTCCS/CCF/blob/main/images/invertp1.PNG)
2. makes the functon to swap the colors when clicked 
![image](https://github.com/SICTCCS/CCF/blob/main/images/invertp2.PNG)