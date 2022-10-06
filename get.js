//importing the initializeApp method from another js file on the web
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";

//setting up a constant variable (never changes) with all of the database information
const firebaseConfig = {
    apiKey: "AIzaSyBIgYvPowZd3viGd7moLOUjAe92r3H4SlE",
    authDomain: "sictcccf.firebaseapp.com",
    databaseURL: "https://sictcccf-default-rtdb.firebaseio.com",
    projectId: "sictcccf",
    storageBucket: "sictcccf.appspot.com",
    messagingSenderId: "238921521038",
    appId: "1:238921521038:web:417620ad7630a3330276df"
};

//initializing the firebase with our config
firebase.initializeApp(firebaseConfig);
//making a "database" variable to prevent typing firebase.database() every time
var database = firebase.database();

//https://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
//modifying String's prototype in order to add python-like formatting - i love stack overflow
//literally making a function for the String class
if (!String.prototype.format) {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
                ;
        });
    };
}

//four functions for filtering
//script will run addAll() by default, but when a filter button is clicked it resets the body and uses an if statement to only pass in colleges,companies,etc to addCard()
async function addAll() {
    //call database catagory (reference) "Items" and on a changed value take a snapshot, then:
    database.ref("Items").on('value', (snapshot) => {
        //call the HTML document and get element with id "body-output" (body), set the HTML code to "" (resets the body to prevent duplication)
        document.getElementById("body-output").innerHTML = "";
        //constant data = snapshot.val() which makes snapshot a readable dictionary
        const data = snapshot.val();
        //variable items = the values of data, which is all of the individual dictionaries in the "Items" catagory on firebase - AKA each college/company
        var items = Object.values(data);
        //for each object "l" in items (each item with the weird looking names - each college/company)
        for (let l in items) {
            //pass each individual college/company (each dictionary) into addCard, which builds out the html
            addCard(items[l]);
        }
    });
}
//same function just with an if statement to only pass in colleges
function addColleges() {
    database.ref("Items").on('value', (snapshot) => {
        document.getElementById("body-output").innerHTML = "";
        const data = snapshot.val();
        var items = Object.values(data);
        for (let l in items) {
            if (items[l]["type"] === "College") {
                addCard(items[l]);
            }
        }
    });
}

function addCompanies() {
    database.ref("Items").on('value', (snapshot) => {
        document.getElementById("body-output").innerHTML = "";
        const data = snapshot.val();
        var items = Object.values(data);
        for (let l in items) {
            if (items[l]["type"] === "Company") {
                addCard(items[l]);
            }
        }
    });
}

function addMilitary() {
    database.ref("Items").on('value', (snapshot) => {
        document.getElementById("body-output").innerHTML = "";
        const data = snapshot.val();
        var items = Object.values(data);
        for (let l in items) {
            if (items[l]["type"] === "Military") {
                addCard(items[l]);
            }
        }
    });
}


function addinterest(intrest) {
    let content=false
    database.ref("Items").on('value', (snapshot) => {
        document.getElementById("body-output").innerHTML = "";
        const data = snapshot.val();
        var items = Object.values(data);
        for (let l in items) {
            // checks what you searched if its in the name intrest areas and desc if it is add to add card else skip and check other one 
            if (items[l]["ia1"] === intrest || items[l]["ia2"] === intrest || items[l]["ia3"] === intrest || items[l]["ia4"] === intrest || items[l]["name"].toLowerCase().includes(intrest) || items[l]["desc"].toLowerCase().includes(intrest)) {
                addCard(items[l]);
                content=true
            }
            
        }
        // if no resalts are found then show this page saying try anouther search
        if (content===false){
            document.getElementById("body-output").innerHTML ="<h1 style=color:grey>Sorry nothing found with that search.</h1><img width=15% src=https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/1410400/rubber-duck-clipart-xl.png>";
        
        
        
        
        
        
            // addCard(items[])
            // window.open("https://"+document.getElementById("ui").value+".github.io/", '_blank')
        }
    });
    
    // if(document.getElementById("ui").value.toLowerCase() == "nathan"){window.open("https://natebrant.github.io/", '_blank');}
    
}



//run addAll() by default
await addAll();
let test = "test"
//https://www.w3schools.com/jsref/event_onclick.asp
//these are basically if statements or "onClickListeners" if you will
document.getElementById("allbutton").onclick = function () { addAll() };
document.getElementById("collegesbutton").onclick = function () { addColleges() };
document.getElementById("companiesbutton").onclick = function () { addCompanies() };
document.getElementById("militarybutton").onclick = function () { addMilitary() };
document.getElementById("Manufacturing").onclick = function () { addinterest("Manufacturing") };
document.getElementById("Transportation").onclick = function () { addinterest("Transportation") };
document.getElementById("Engineering").onclick = function () { addinterest("Engineering") };
document.getElementById("HealthSciences").onclick = function () { addinterest("Health Sciences") };
document.getElementById("Communication").onclick = function () { addinterest("Communication") };
document.getElementById("PublicSafety").onclick = function () { addinterest("Public Safety") };
document.getElementById("CulinaryArts").onclick = function () { addinterest("Culinary Arts") };
document.getElementById("Construction").onclick = function () { addinterest("Construction") };
document.getElementById("ComputerTechnology").onclick = function () { addinterest("Computer Technology") };
document.getElementById("AnimalScience/Agriculture").onclick = function () { addinterest("Animal Science/Agriculture") };
document.getElementById("search").onclick = function () { addinterest((document.getElementById("ui").value).toLowerCase())};


// adds a event to lisen if enter is clicked when it is it will search the page becuase its annoying to have to type then click search button
document.onkeydown = function (e) {
    e = e || window.event;
    switch (e.which || e.keyCode) {
          case 13 : addinterest((document.getElementById("ui").value).toLowerCase())
              break;
    }
  }


//  addinterest(prompt(document.getElementById("ui").innerText))
// function sortInterest(interest){addinterest(interest)} 
//the addCard function takes in "l" which would be a list and uses it to build out each card 
async function addCard(l) {

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
            <div class="card-body">`.format(l["logo"], l["name"]);

    if (l["type"] === "College") {
        div = div + `<a href="{0}" class="btn btn-danger">{1} Website</a>`.format(l["web"], l["name"]);
    } else if (l["type"] === "Company") {
        div = div + `<a href="{0}" class="btn btn-primary">{1} Website</a>`.format(l["web"], l["name"]);
    } else {
        div = div + `<a href="{0}" class="btn btn-success">{1} Website</a>`.format(l["web"], l["name"]);
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
    // document.onclick=sortInterest(1)
}


// jquerry to add function to a button that shows up when you scroll down a bit that wil take you back to the top of the screen
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {       
        $('.return-to-top').fadeIn(250);
    } else {
        $('.return-to-top').fadeOut(250);  
    }
});
$('.return-to-top').click(function() {      //add an animation to return back to the top of the screen
    $('body,html').animate({
        scrollTop : 0                       
    }, 100);
});

// when ?search= is entered after the url it is loaded into the search bar and automatically searched.
// this is used by the map
var search = document.URL.split("?search=")[1]
if (search != undefined) {
    search = decodeURI(search)
    document.getElementById("ui").value = search
    addinterest((document.getElementById("ui").value).toLowerCase())
    
}

var intrest = document.URL.split("?intrest=")[1]
if (intrest != undefined) {
    intrest = decodeURI(intrest)
    console.log(typeof(intrest))
    console.log(intrest)
    if(intrest=="college"){
        addColleges()
    }
    else if(intrest=="military"){
        addMilitary()
    }
    else if(intrest=="companies"){
        addCompanies()
    }
    else{
    addinterest((intrest))}
    
}