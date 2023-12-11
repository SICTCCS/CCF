# CCF

# How to get private.json

* Gear Icon -> Project Settings -> Service Accounts -> Generate new private key

![image](docImg/documentation1.png)

* You need a private folder if you don't already have one.

* You'll need to rename the file to "private.json".

![image](docImg/docPrivFolder.png)

**DO NOT PUSH THIS TO A PUBLIC GITHUB**

# Run python tool

* make sure to pip install both firebase_admin and pyinstaller

* Run the python script with py

![image](docImg/docRunPyTool.png)

**OR**

* First get pyinstaller by running "pip install pyinstaller" then run build.bat

![image](docImg/docPipInstall.png)

* Enter the dist directory.

![image](https://user-images.githubusercontent.com/91961334/202524395-24d0d2f8-57bc-47bf-8d9d-218665c09380.png)

* Wait for batch to finish and an .exe should appear.

![image](https://user-images.githubusercontent.com/91961334/202524433-82e311c5-301f-48e8-8e3e-97edc6da7bcc.png)

**DO NOT PUSH THIS TO A PUBLIC GITHUB**

# How to get .tsv

* Open Google Sheets and click on file. Hover over the download button and select TSV.

![image](docImg/docTSVDownload.png)

# Uploading .tsv to firebase

* Click "Add Card"

![image](docImg/docAddCard.png)

* Click "Clear Firebase and Upload TSV"

![image](docImg/docUploadTSV.png)

# Enable Auth (NOT REQUIRED)
This method was used for the addCard.html, but it's not required for the python script.

1. Enable authentication service on firebase. (it is separate from the realtime database)

![image](https://user-images.githubusercontent.com/91961334/200909413-02578e34-285e-4de4-b733-43bb4840a4d4.png)

2. Enable email only (under Sign-in method) and setup a dummy account (under users). This doesn't need to be a real email.

![image](https://user-images.githubusercontent.com/91961334/200909681-1796411f-792e-4449-8859-2ffd076926d6.png)

3. Change the realtime database rules to allow for auth users to make changes.

![image](https://user-images.githubusercontent.com/91961334/200909004-7da2e969-4d51-4e36-a2d2-7349e2b2c747.png)

4. Add your information to the addCard.html. **DO NOT PUSH THIS TO A PUBLIC GITHUB**


# Git.js information
# init firebase
* Initialize firebase database
* Remember to change firebase information with new, updated one

![image](docImg/docGetJs.png)

# Functions for site

* Add all function will be called to autoload everything from the firebase server in order to show all items

![image](docImg/docAddAllFunction.png)

* Then is one of the 4 function used to sort by interests they are all almost the same, but each detects different types

![image](docImg/docAddTypeFunction.png)

* Next is a function that if search is used, it will sort through all data and if name, type, or description match, it will pull up after searched

![image](docImg/docAddInterestFunction.png)

# <a name="startup"></a>Website start up

* This will run to set up all the buttons to be ready to be clicked and load all and showing all the information

![image](docImg/docMassButtons.png)

* Then a button was created in order to remove the annoying mess of having to click the search icon every time, so that if you clicked enter it would load

![image](docImg/docEventListener.png)

# Add Card

* This is what will make and append the divs to the main
* First this will go through the data it was given and create the basic div template then check the data for it's type and add that to the template and set default images

![image](docImg/docAddCardFunction.png)

* Then it will finish the base div template
* After that it will sort through and do a conditional check for how many entries there are and after getting the amount of entries it will add each on to the entry sections
* Finally append the div create to the main div this all will repeat for every item that passed the sort option the user picks through
![image](docImg/docAddCardInterestsPart.png)

# To Top BTN

* A simple button that will show when scrolled slightly down, it will add a fast animation by setting the scrolltop to 0
![image](docImg/docToTopFunction.png)

# Querry Tags

* This is used to save info to the search bar, so if the user reloaded the page it will save their search and redo it
* It was also made to be able to send the link while something is looked up and to still be the way they sent it

![image](docImg/docQueryTagFunction.png)

# Dark/light Mode

* This will invert the color of everything to make them dark or light depending what they were before they clicked the button, then set the button logo to a sun or moon

1. Sets the consts that will be set to or inverted from
![image](docImg/docDLModePt1.png)
2. Makes the functon to swap the colors when clicked
![image](docImg/docDLModePt2.png)

# Map.js Documentation 

* Currently hard-coded variables but should eventually make this auto generated
* These variables are the list of where they will be during the CCF that are the EXACT name that thay put in

![image](docImg/docMapAreaList.png)

* Then is a function that will take a list of where they will be and then return a html list of them
* Where each of them has an href that will reopen the get.js page, and the interest tag will be the name of the button

![image](docImg/docMapHref.png)

* Then runs function on all lists

![image](docImg/docMapList.png)

* Then run the same thing that was said
* Start up [startup](#startup)

# Map canvas

* Now we create a html canvas and add event listeners for click and hover event to the canvas to get the x,y of clicks
* Then create an image sprite and set it to the image of the school
* As well as the buttons for the different areas, that will populate at the top of the screen and be able to be clicked to show the different booths in said area
![image](docImg/docMapAreaClicks.png)

# Map Functions

* Then create a function that will plot all the buttons on the canvas

![image](docImg/docMapAddButton.png)

* Then a function for mouse click/hover on the canvas buttons it will
* Check if where you clicked or hover is on top of a button
* It if is then set the buttons div that is the list of companies at that spot to show and all others to hide
![image](docImg/docMapMakeCanvas.png)
# Draw canvas

* Finally a function that will draw the canvas and the buttons on the canvas
* As well as a interval that will trigger every 100ms, so that if the user resizes the screen it will also update to that and put it in the right position

![image](docImg/docMapCreateCanvas.png)

* website
https://sictccs.github.io/CCF/mapView.html