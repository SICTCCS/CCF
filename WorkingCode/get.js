//importing the initializeApp method from another js file on the web
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";

//setting up a constant variable (never changes) with all of the database information
const firebaseConfig = {
    apiKey: "AIzaSyAneiYMGEzQslJ9stxikkG-WDIp4vFBIdE",
    authDomain: "sictc-career-fair.firebaseapp.com",
    projectId: "sictc-career-fair",
    storageBucket: "sictc-career-fair.appspot.com",
    messagingSenderId: "513234627322",
    appId: "1:513234627322:web:bb29fecd5ceeea674b3743",
    measurementId: "G-1GKEYRGJXZ",
    databaseURL: "https://sictc-career-fair-default-rtdb.firebaseio.com/"
    };

//initializing the firebase with our config
firebase.initializeApp(firebaseConfig);
//making a "database" variable to prevent typing firebase.database() every time
var database = firebase.database();

//https://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
//modifying String's prototype in order to add python-like formatting - i love stack overflow
//literally making a function for the String class
if (!String.prototype.format) {
    String.prototype.format = function() {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function(match, number) { 
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
            ;
        });
    };
}

//four functions for filtering
//script will run addAll() by default, but when a filter button is clicked it resets the body and uses an if statement to only pass in colleges,companies,etc to addCard()
function addAll(){
    //call database catagory (reference) "Items" and on a changed value take a snapshot, then:
    database.ref("Items").on('value', (snapshot) => {
        //call the HTML document and get element with id "body-output" (body), set the HTML code to "" (resets the body to prevent duplication)
        document.getElementById("body-output").innerHTML = "";
        //constant data = snapshot.val() which makes snapshot a readable dictionary
        const data = snapshot.val();
        //variable items = the values of data, which is all of the individual dictionaries in the "Items" catagory on firebase - AKA each college/company
        var items = Object.values(data);
        //for each object "l" in items (each item with the weird looking names - each college/company)
        for (let l in items){
            //pass each individual college/company (each dictionary) into addCard, which builds out the html
            addCard(items[l]);
        }
    });
}
//same function just with an if statement to only pass in colleges
function addColleges(){
    database.ref("Items").on('value', (snapshot) => {
        document.getElementById("body-output").innerHTML = "";
        const data = snapshot.val();
        var items = Object.values(data);
        for (let l in items){
            if (items[l]["type"]==="College"){
                addCard(items[l]);
            }
        }
    });
}

function addCompanies(){
    database.ref("Items").on('value', (snapshot) => {
        document.getElementById("body-output").innerHTML = "";
        const data = snapshot.val();
        var items = Object.values(data);
        for (let l in items){
            if (items[l]["type"]==="Company"){
                addCard(items[l]);
            }
        }
    });
}

function addMilitary(){
    database.ref("Items").on('value', (snapshot) => {
        document.getElementById("body-output").innerHTML = "";
        const data = snapshot.val();
        var items = Object.values(data);
        for (let l in items){
            if (items[l]["type"]==="Military"){
                addCard(items[l]);
            }
        }
    });
}
//run addAll() by default
addAll();

//https://www.w3schools.com/jsref/event_onclick.asp
//these are basically if statements or "onClickListeners" if you will
document.getElementById("allbutton").onclick = function() {addAll()};
document.getElementById("collegesbutton").onclick = function() {addColleges()};
document.getElementById("companiesbutton").onclick = function() {addCompanies()};
document.getElementById("militarybutton").onclick = function() {addMilitary()};


//the addCard function takes in "l" which would be a list and uses it to build out each card 
function addCard(l){
    //getting the body's previous information
    var prevDiv = document.getElementById("body-output").innerHTML;

    var div = `
    <div class="card mb-3" style="max-width: 75%;" align="left">
        <div class="row g-0">
            <div class="col-md-2">
                <img src="{0}" class="img-fluid rounded-start" style="padding:10px;" alt="{1} logo" >
            </div>
            <div class="col-md-7">
                <div class="card-body">
                    <h5 class="card-title" style="font-size: 27px;">{1}</h5>
                    <div class="card-body">`.format(l["logo"],l["name"]);

    if (l["type"]==="College"){
        div = div + `<a href="{0}" class="btn btn-danger">{1} Website</a>`.format(l["web"],l["name"]);
    } else if (l["type"]==="Company"){
        div = div + `<a href="{0}" class="btn btn-primary">{1} Website</a>`.format(l["web"],l["name"]);
    } else {
        div = div + `<a href="{0}" class="btn btn-success">{1} Website</a>`.format(l["web"],l["name"]);
    }
        
    div = div + `   </div>
                    <p class="card-text">{0}</p>
                </div>
            </div>
            <div class="col-md-3" align="center" style="padding-right:15px;padding-left:15px;">
                <div class="card-body">
                    <p class="card-text">Interest Areas:</p>
                </div> 
                <ul class="list-group list-group-flush">`.format(l["desc"]);
    //adding to div depending on how many interest areas are blank
    //will make this smaller is a final version
    if (l["ia2"]==="" && l["ia3"]==="" && l["ia4"]==="" && l["ia5"]===""){
        div = div +`<li class="list-group-item">{0}</li>`.format(l["ia1"]);
    } else if (l["ia3"]==="" && l["ia4"]==="" && l["ia5"]===""){
        div = div +`<li class="list-group-item">{0}</li> 
                    <li class="list-group-item">{1}</li>`.format(l["ia1"],l["ia2"]);
    } else if (l["ia4"]==="" && l["ia5"]===""){
        div = div +`<li class="list-group-item">{0}</li> 
                    <li class="list-group-item">{1}</li> 
                    <li class="list-group-item">{2}</li>`.format(l["ia1"],l["ia2"],l["ia3"]);
    } else if (l["ia5"]===""){
        div = div +`<li class="list-group-item">{0}</li> 
                    <li class="list-group-item">{1}</li> 
                    <li class="list-group-item">{2}</li> 
                    <li class="list-group-item">{3}</li>`.format(l["ia1"],l["ia2"],l["ia3"],l["ia4"]);
    } else {
        div = div +`<li class="list-group-item">{0}</li> 
                    <li class="list-group-item">{1}</li> 
                    <li class="list-group-item">{2}</li> 
                    <li class="list-group-item">{3}</li> 
                    <li class="list-group-item">{4}</li>`.format(l["ia1"],l["ia2"],l["ia3"],l["ia4"],l["ia5"]);
    }

    div = div + `</ul></div></div></div>`;
    //adding the new information to the previous information and putting it into the body
    document.getElementById("body-output").innerHTML = prevDiv + div;
}
