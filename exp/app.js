// Step 1: Paste your Firebase config object here
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAsEdspg0wB9S5CubYMy4QdW-q1zgt-zo",
  authDomain: "sictcccf-test-environment.firebaseapp.com",
  projectId: "sictcccf-test-environment",
  storageBucket: "sictcccf-test-environment.firebasestorage.app",
  messagingSenderId: "357072410425",
  appId: "1:357072410425:web:5f6b542a23c86f49797ae8",
  measurementId: "G-TR8KEHLHME"
};

// Step 2: Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Step 3: Get a reference to the database service
const database = firebase.database();

// Step 4: Get references to your HTML elements
const companiesList = document.getElementById('companies-list');
const collegesList = document.getElementById('colleges-list');

// Step 5: Read and display companies in real time
database.ref('companies').on('value', (snapshot) => {
    // Clear previous list content
    companiesList.innerHTML = ''; 

    // Loop through each company and display it
    snapshot.forEach((childSnapshot) => {
        const company = childSnapshot.val();
        const companyElement = document.createElement('div');
        companyElement.innerHTML = `<h3>${company.name}</h3><p>Booth: ${company.booth_number}</p>`;
        companiesList.appendChild(companyElement);
    });
});

// Step 6: Read and display colleges in real time
database.ref('colleges').on('value', (snapshot) => {
    // Clear previous list content
    collegesList.innerHTML = ''; 

    // Loop through each college and display it
    snapshot.forEach((childSnapshot) => {
        const college = childSnapshot.val();
        const collegeElement = document.createElement('div');
        collegeElement.innerHTML = `<h3>${college.name}</h3><p>Booth: ${college.booth_number}</p>`;
        collegesList.appendChild(collegeElement);
    });
});