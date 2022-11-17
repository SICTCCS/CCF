# CCF

# How to get private.json

* Gear Icon -> Project Settings -> Service Accounts -> Generate new private key

![image](https://user-images.githubusercontent.com/91961334/200907431-7ac2dd2b-4d10-4275-b0f6-b86223fe67a6.png)

* You need a private folder if you don't already have one.

![image](https://user-images.githubusercontent.com/91961334/202522154-8a64c792-246c-4509-b2d9-ec977fc5656d.png)

* You'll need to rename the file to "private.json".

![image](https://user-images.githubusercontent.com/91961334/202522325-ef452d66-10bb-4e01-998a-31fbdd7aea10.png)


**DO NOT PUSH THIS TO A PUBLIC GITHUB**

# Enable Auth (NOT REQUIRED)
This method was used for the addCard.html but is not required for the python script.

1. Enable authentication service on firebase. (it is separate from the realtime database)

![image](https://user-images.githubusercontent.com/91961334/200909413-02578e34-285e-4de4-b733-43bb4840a4d4.png)

2. Enable email only (under Sign-in method) and setup a dummy account (under users). This doesn't need to be a real email.

![image](https://user-images.githubusercontent.com/91961334/200909681-1796411f-792e-4449-8859-2ffd076926d6.png)

3. Change the realtime database rules to allow for auth users to make changes.

![image](https://user-images.githubusercontent.com/91961334/200909004-7da2e969-4d51-4e36-a2d2-7349e2b2c747.png)

4. Add your information to the addCard.html. **DO NOT PUSH THIS TO A PUBLIC GITHUB**
