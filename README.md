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

* Run build.bat

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
