Here's the guide formatted as a downloadable markdown file (`.md`) that you can share with your team. This format is great because it can be read by any text editor and is often rendered beautifully on platforms like GitHub, GitLab, or VS Code.

-----

### Career Fair Website: A Quickstart Guide

This document outlines the steps to set up and manage a simple career fair website using **Firebase Realtime Database**. The setup allows for real-time updates without requiring code changes or website redeployment.

-----

### Step 1: Project Setup & File Structure

Create a folder for your project and the necessary files.

1.  Create a new folder named `career-fair-website`.
2.  Inside this folder, create the following files:
      * `index.html`
      * `style.css`
      * `app.js`

-----

### Step 2: The HTML File (`index.html`)

This file is the skeleton of your website. Copy and paste the code below into your `index.html` file.

  * The two `<div>` elements with `id`s (`companies-list` and `colleges-list`) are where our database content will be injected by JavaScript.
  * The `<script>` tags load the Firebase libraries from a CDN. **It's essential that these are loaded before your `app.js` file.**

<!-- end list -->

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Career Fair 2025</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1>Career Fair 2025</h1>
    <h2>Companies Attending</h2>
    <div id="companies-list">
        </div>

    <h2>Colleges Attending</h2>
    <div id="colleges-list">
        </div>

    <script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-database.js"></script>
    
    <script src="app.js"></script>
</body>
</html>
```

-----

### Step 3: The JavaScript File (`app.js`)

This code connects your website to the Firebase database.

1.  **Get your Firebase config object**:
      * Go to your **Firebase Console**.
      * Click the **gear icon** ⚙️ \> **Project settings**.
      * In the "Your apps" section, click the **Web icon** (`</>`) to add a web app.
      * Copy the `firebaseConfig` object provided.
2.  **Paste the code**: Copy the following script into your `app.js` file, replacing the placeholder `firebaseConfig` object with the one you copied from the console.

<!-- end list -->

```javascript
// Paste your Firebase config object here from the console
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

// Get a reference to our HTML containers
const companiesList = document.getElementById('companies-list');
const collegesList = document.getElementById('colleges-list');

// Listen for data changes in the 'companies' node
database.ref('companies').on('value', (snapshot) => {
    companiesList.innerHTML = ''; // Clear the list
    snapshot.forEach((childSnapshot) => {
        const company = childSnapshot.val();
        const companyElement = document.createElement('div');
        companyElement.innerHTML = `<h3>${company.name}</h3><p>Booth: ${company.booth_number}</p>`;
        companiesList.appendChild(companyElement);
    });
});

// Listen for data changes in the 'colleges' node
database.ref('colleges').on('value', (snapshot) => {
    collegesList.innerHTML = ''; // Clear the list
    snapshot.forEach((childSnapshot) => {
        const college = childSnapshot.val();
        const collegeElement = document.createElement('div');
        collegeElement.innerHTML = `<h3>${college.name}</h3><p>Booth: ${college.booth_number}</p>`;
        collegesList.appendChild(collegeElement);
    });
});
```

-----

### Step 4: The Database Structure and Data Entry

This is where you'll add the content for the website. The structure is a simple JSON tree.

1.  Go to the **Firebase Console** and navigate to the **Realtime Database** section.
2.  Create a new node called `companies`. Inside it, use the `+` button to add entries for each company. A unique key will be auto-generated.
3.  Repeat this process to create a `colleges` node.

Your database structure should look like this:

```json
{
  "companies": {
    "auto_generated_key_1": {
      "name": "Google",
      "booth_number": "A101"
    },
    ...
  },
  "colleges": {
    "auto_generated_key_3": {
      "name": "Indiana University",
      "booth_number": "C303"
    },
    ...
  }
}
```

-----

### Step 5: Viewing and Deployment

To see your website in action:

  * **Locally**: Simply open the `index.html` file in your web browser.
  * **For the public**: To host your site for everyone, you can use a service like **Firebase Hosting**, Netlify, or Vercel. These services can automatically deploy your static files (`.html`, `.css`, `.js`) and make them accessible via a public URL.