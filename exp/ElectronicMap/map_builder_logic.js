//importing the initializeApp method from another js file on the web
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js";

//setting up a constant variable (never changes) with all of the database information Ok thanks bo
const firebaseConfig = {
    apiKey: "AIzaSyBIgYvPowZd3viGd7moLOUjAe92r3H4SlE",
    authDomain: "sictcccf.firebaseapp.com",
    databaseURL: "https://sictcccf-default-rtdb.firebaseio.com",
    projectId: "sictcccf",
    storageBucket: "sictcccf.appspot.com",
    messagingSenderId: "238921521038",
    appId: "1:238921521038:web:417620ad7630a3330276df"
};
// 3. Initialize the app and assign it to a variable
const app = initializeApp(firebaseConfig);
// 4. Get the database instance by passing the app into getDatabase()
const database = getDatabase(app);

// This will hold the live data from Firebase
let databaseItems = [];

// Layout Configuration based on the PDF
const mapSections = [
    { id: "WH", name: "West Hallway", count: 16, type: "table" },
    { id: "C", name: "Commons", count: 38, type: "table" },
    { id: "SH", name: "South Hallway", count: 4, type: "table" },
    { id: "A", name: "Assembly Hall", count: 34, type: "table" },
    { id: "EH", name: "East Hallway", count: 16, type: "table" },
    { id: "CO", name: "Construction", count: 24, type: "zone_input" }, // Inputs only, mapped to zone
    { id: "T", name: "Transportation", count: 24, type: "zone_input" }  // Inputs only, mapped to zone
];

// Array to hold the coordinates for all individual tables
let tableCoordinates = [];

async function initMapBuilder() {
    // 1. Fetch live data from Firebase FIRST
    await fetchCompaniesFromFirebase();
    
    // 2. Build the autocomplete list with the live data
    createDatalist();
    
    try {
        // Try to load the saved coordinates from the JSON file
        const response = await fetch('./coordinates.json');
        if (response.ok) {
            tableCoordinates = await response.json();
            console.log("Successfully loaded layout from coordinates.json!");
        } else {
            console.warn("coordinates.json not found. Generating default grid.");
            generateInitialCoordinates();
        }
    } catch (error) {
        console.warn("Could not fetch coordinates.json. Generating default grid.", error);
        generateInitialCoordinates();
    }

    generateMapSlots();
    generateAccordionInputs();
    setupDraggable();
}

// Fetches the live company data from Firebase
async function fetchCompaniesFromFirebase() {
    const itemsRef = ref(database, "Items");
    try {
        const snapshot = await get(itemsRef);
        if (snapshot.exists()) {
            const data = snapshot.val();
            // Object.values() converts your Firebase dictionaries into an array
            databaseItems = Object.values(data);
            console.log(`Successfully loaded ${databaseItems.length} companies from Firebase!`);
        } else {
            console.log("No data found in the Items node.");
        }
    } catch (error) {
        console.error("Error fetching data from Firebase:", error);
    }
}

function createDatalist() {
    const dataListHTML = `<datalist id="company-list">
        ${databaseItems.map(item => `<option value="${item.name}"></option>`).join('')}
    </datalist>`;
    document.body.insertAdjacentHTML('beforeend', dataListHTML);
    console.log(database)
}

// This generates a starting grid for the tables so they aren't all piled on top of each other.
function generateInitialCoordinates() {
    let startX = 50;
    let startY = 250;

    mapSections.forEach(section => {
        if (section.type === "table") {
            let colCount = 0;
            for (let i = 1; i <= section.count; i++) {
                tableCoordinates.push({
                    id: `${section.id}${i}`,
                    label: `${section.id}${i}`,
                    x: startX + (colCount * 50),
                    y: startY
                });
                
                colCount++;
                if (colCount > 7) { // Wrap to next row after 8 tables
                    colCount = 0;
                    startY += 50;
                }
            }
            startX += 420; // Move next section over
            startY = 250;
            if (startX > 1000) { startX = 50; startY += 300; }
        }
    });
}

function generateMapSlots() {
    const canvas = document.getElementById('map-canvas');
    
    tableCoordinates.forEach(table => {
        const slotHTML = `
            <div class="map-slot" id="slot-${table.id}" style="left: ${table.x}px; top: ${table.y}px;">
                <span class="slot-label">${table.label}</span>
            </div>
        `;
        canvas.innerHTML += slotHTML;
    });
}

function generateAccordionInputs() {
    const accordion = document.getElementById('accordionInputs');
    let isFirst = true;

    mapSections.forEach(section => {
        let inputsHTML = '<div class="row">';
        
        for (let i = 1; i <= section.count; i++) {
            const tableId = `${section.id}${i}`;
            inputsHTML += `
                <div class="col-md-3 col-sm-4 col-6 mb-3">
                    <label class="form-label fw-semibold small text-secondary">${tableId}</label>
                    <input type="text" 
                           class="form-control form-control-sm" 
                           placeholder="Company..." 
                           list="company-list"
                           id="input-${tableId}"
                           oninput="handleAssignment('${tableId}', '${section.type}', '${section.id}')">
                </div>
            `;
        }
        inputsHTML += '</div>';

        const accordionHTML = `
            <div class="accordion-item">
                <h2 class="accordion-header" id="heading-${section.id}">
                    <button class="accordion-button ${isFirst ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${section.id}">
                        <strong>${section.name}</strong> &nbsp;<span class="badge bg-secondary rounded-pill">${section.count} Tables</span>
                    </button>
                </h2>
                <div id="collapse-${section.id}" class="accordion-collapse collapse ${isFirst ? 'show' : ''}" data-bs-parent="#accordionInputs">
                    <div class="accordion-body bg-light">
                        ${inputsHTML}
                    </div>
                </div>
            </div>
        `;
        accordion.innerHTML += accordionHTML;
        isFirst = false;
    });
}

// Make the function global so the HTML can see it
window.handleAssignment = handleAssignment;

function handleAssignment(tableId, type, prefix) {
    if (type === 'table') {
        updateStandardTable(tableId);
    } else if (type === 'zone_input') {
        updateZone(prefix);
    }
}

function updateStandardTable(tableId) {
    const inputElement = document.getElementById(`input-${tableId}`);
    const slotElement = document.getElementById(`slot-${tableId}`);
    const typedName = inputElement.value;
    const foundCompany = databaseItems.find(c => c.name.toLowerCase() === typedName.toLowerCase());

    if (foundCompany) {
        slotElement.innerHTML = `<img src="${foundCompany.logo}" class="slot-logo" title="${tableId}: ${foundCompany.name}">`;
        slotElement.classList.add('filled');
    } else if (typedName.trim() !== "") {
        slotElement.innerHTML = `<span class="slot-label text-primary" style="font-size:0.5rem; word-break:break-all;">${typedName}</span>`;
        slotElement.classList.add('filled');
    } else {
        slotElement.innerHTML = `<span class="slot-label">${tableId}</span>`;
        slotElement.classList.remove('filled');
    }
}

// Updates the big Construction or Transportation boxes on the map
function updateZone(prefix) {
    const zoneElement = document.getElementById(`zone-${prefix}`);
    const sectionConfig = mapSections.find(s => s.id === prefix);
    let filledHTML = '';

    // Loop through all inputs for this specific zone (e.g., CO1 to CO24)
    for (let i = 1; i <= sectionConfig.count; i++) {
        const tableId = `${prefix}${i}`;
        const inputVal = document.getElementById(`input-${tableId}`).value;
        
        if(inputVal.trim() !== '') {
            const company = databaseItems.find(c => c.name.toLowerCase() === inputVal.toLowerCase());
            if (company) {
                filledHTML += `<img src="${company.logo}" class="zone-mini-logo shadow-sm" title="${tableId}: ${company.name}" data-bs-toggle="tooltip">`;
            } else {
                filledHTML += `<span class="badge bg-primary m-1 shadow-sm" title="${tableId}">${inputVal}</span>`;
            }
        }
    }
    
    if (filledHTML !== '') {
        // If there are assignments, show the logos!
        zoneElement.innerHTML = filledHTML;
        zoneElement.classList.add('filled');
    } else {
        // If empty, revert to standard text
        zoneElement.innerHTML = `<span class="slot-label text-muted fs-6">${sectionConfig.name} Zone</span>`;
        zoneElement.classList.remove('filled');
    }
}

let isStudentMode = false;

function setupDraggable() {
    let isDragging = false;
    let currentElement = null;
    let startX, startY, initialLeft, initialTop;

    const makeDraggable = (elements) => {
        elements.forEach(el => {
            el.onmousedown = function(e) {
                if (isStudentMode) return;
                isDragging = true;
                currentElement = this;
                startX = e.clientX;
                startY = e.clientY;
                initialLeft = parseInt(this.style.left) || 0;
                initialTop = parseInt(this.style.top) || 0;
                e.preventDefault(); // prevents text highlighting while dragging
            };
        });
    };

    makeDraggable(document.querySelectorAll('.map-slot'));
    makeDraggable(document.querySelectorAll('.zone-slot'));

    document.onmousemove = function(e) {
        if (!isDragging || !currentElement) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        currentElement.style.left = (initialLeft + dx) + 'px';
        currentElement.style.top = (initialTop + dy) + 'px';
    };

    document.onmouseup = function() {
        if (currentElement && currentElement.classList.contains('map-slot')) {
            // Save coordinates back to our array
            const id = currentElement.id.replace('slot-', '');
            const configItem = tableCoordinates.find(c => c.id === id);
            if (configItem) {
                configItem.x = parseInt(currentElement.style.left);
                configItem.y = parseInt(currentElement.style.top);
            }
        }
        isDragging = false;
        currentElement = null;
    };
}

// Dumps the final coordinates so you can permanently save your layout!
function exportCoordinates() {
    const dataStr = JSON.stringify(tableCoordinates, null, 2);
    navigator.clipboard.writeText(dataStr).then(() => {
        // Fallback custom alert since standard alert is restricted
        showTemporaryMessage("Coordinates copied to clipboard! Paste them into your code to save the layout.");
    }).catch(err => {
        console.log("Coordinates:", dataStr);
        showTemporaryMessage("Check the browser console (F12) for the layout JSON!");
    });
}

function showTemporaryMessage(msg) {
    const msgBox = document.createElement('div');
    msgBox.className = "alert alert-success position-fixed bottom-0 end-0 m-3 shadow-lg";
    msgBox.style.zIndex = "9999";
    msgBox.innerHTML = `<i class="fa fa-check-circle me-2"></i> ${msg}`;
    document.body.appendChild(msgBox);
    setTimeout(() => msgBox.remove(), 4000);
}

function toggleStudentMode() {
    const controls = document.getElementById('admin-controls');
    const canvas = document.getElementById('map-canvas');
    const modeBtn = document.getElementById('mode-btn');
    const exportBtn = document.getElementById('export-btn');
    
    isStudentMode = !isStudentMode;
    
    if (isStudentMode) {
        controls.style.display = 'none';
        exportBtn.style.display = 'none';
        canvas.classList.remove('admin-mode');
        modeBtn.innerHTML = '<i class="fa fa-edit"></i> Back to Admin Mode';
        modeBtn.classList.replace('btn-success', 'btn-warning');
        modeBtn.classList.replace('text-white', 'text-dark');
    } else {
        controls.style.display = 'block';
        exportBtn.style.display = 'inline-block';
        canvas.classList.add('admin-mode');
        modeBtn.innerHTML = '<i class="fa fa-eye"></i> Preview Student Mode';
        modeBtn.classList.replace('btn-warning', 'btn-success');
    }
}

// Boot up the app
window.onload = initMapBuilder;