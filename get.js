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
    String.prototype.format = function() {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] != 'undefined' ?
                args[number] :
                match;
        });
    };
}

//four functions for filtering
//script will run addAll() by default, but when a filter button is clicked it resets the body and uses an if statement to only pass in colleges,companies,etc to addCard()
async function addAll() {
    // call database catagory (reference) "Items" and on a changed value take a snapshot, then:
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
//same function just with an if statement to only pass in Companies

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
//same function just with an if statement to only pass in Military

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
//same function just with an if statement to only pass in Union 

function addUnions() {
    database.ref("Items").on('value', (snapshot) => {
        document.getElementById("body-output").innerHTML = "";
        const data = snapshot.val();
        var items = Object.values(data);
        for (let l in items) {
            if (items[l]["type"] === "Union") {
                addCard(items[l]);
            }
        }
    });
}
//same function but now that if it dosent pass the other ones it will pass it into the search bar and run this
// this one will check name interests and decs of then item
function addinterest(interest) {
    let content = false
    database.ref("Items").on('value', (snapshot) => {
        document.getElementById("body-output").innerHTML = "";
        const data = snapshot.val();
        var items = Object.values(data);
        for (let l in items) {
            // checks what you searched if its in the name interest areas and desc if it is add to add card else skip and check other one 
            if (items[l]["ia1"].toLowerCase() === interest || items[l]["ia2"].toLowerCase() === interest || items[l]["ia3"].toLowerCase() === interest || items[l]["ia4"].toLowerCase() === interest || items[l]["ia5"].toLowerCase() === interest || items[l]["name"].toLowerCase().includes(interest) || items[l]["desc"].toLowerCase().includes(interest)) {
                addCard(items[l]);
                content = true
            }

        }
        // if no resalts are found then show this page saying try anouther search
        if (content === false) {
            document.getElementById("body-output").innerHTML = "<h1 style=color:grey>Sorry nothing found with that search.</h1><img width=15% src=https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/1410400/rubber-duck-clipart-xl.png>";

        }
        document.getElementById("ui").value = "";
    });


}



//run addAll() by default and waits for it to finish befor anything else
await addAll();
//these are if statements or "onClickListeners" that listen for you to click on a button
document.getElementById("allbutton").onclick = function() { window.open("index.html", "_self");
    addAll() };
document.getElementById("collegesbutton").onclick = function() { addColleges() };
document.getElementById("companiesbutton").onclick = function() { addCompanies() };
document.getElementById("militarybutton").onclick = function() { addMilitary() };
document.getElementById("Unionsbutton").onclick = function() { addUnions() };
document.getElementById("Manufacturing").onclick = function() { addinterest("manufacturing") };
document.getElementById("Transportation").onclick = function() { addinterest("transportation") };
document.getElementById("Engineering").onclick = function() { addinterest("engineering") };
document.getElementById("HealthSciences").onclick = function() { addinterest("health sciences") };
document.getElementById("Communication").onclick = function() { addinterest("communications") };
document.getElementById("PublicSafety").onclick = function() { addinterest("public safety") };
document.getElementById("CulinaryArts").onclick = function() { addinterest("culinary Arts") };
document.getElementById("Construction").onclick = function() { addinterest("construction") };
document.getElementById("ComputerTechnology").onclick = function() { addinterest("computer technology") };
document.getElementById("AnimalScience/Agriculture").onclick = function() { addinterest("animal science/agriculture") };
document.getElementById("search").onclick = function() { addinterest((document.getElementById("ui").value).toLowerCase()) };


// adds a event to lisen if enter is clicked when it is it will search the page becuase its annoying to have to type then click search button
document.onkeydown = function(e) {
        e = e || window.event;
        switch (e.which || e.keyCode) {
            case 13:
                { window.open("index.html?search=" + document.getElementById("ui").value, "_self"); }
                break;
        }
    }
    //the addCard function takes in "l" which would be a list and uses it to build out each card 
async function addCard(l) {

    //getting the body's previous information
    var prevDiv = document.getElementById("body-output").innerHTML;
    // sets image to duck if img is broken 
    if (l["logo"] === " ") { l["logo"] = "./images/duck.png" }
    // creates basic div layout of the div that we append to the main div

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
    // check the type and make the color change depending of wha type it is 
    if (l["type"] === "College") {
        div = div + `<a href="{0}" target="_blank" class="btn btn-danger">{1} Website</a>`.format(l["web"], l["name"]);
    } else if (l["type"] === "Company") {
        div = div + `<a href="{0}" target="_blank" class="btn btn-primary">{1} Website</a>`.format(l["web"], l["name"]);
    } else if (l["type"] === "Union") {
        div = div + `<a href="{0}" target="_blank" class="btn btn-union">{1} Website</a>`.format(l["web"], l["name"]);
    } else {
        div = div + `<a href="{0}" target="_blank" class="btn btn-success">{1} Website</a>`.format(l["web"], l["name"]);
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
    if (l["ia2"] === "" && l["ia3"] === "" && l["ia4"] === "" && l["ia5"] === "") {
        div = div + `<li class="list-group-item">{0}</li>`.format(l["ia1"]);
    } else if (l["ia3"] === "" && l["ia4"] === "" && l["ia5"] === "") {
        div = div + `<li class="list-group-item">{0}</li> 
                    <li class="list-group-item">{1}</li>`.format(l["ia1"], l["ia2"]);
    } else if (l["ia4"] === "" && l["ia5"] === "") {
        div = div + `<li class="list-group-item">{0}</li> 
                    <li class="list-group-item">{1}</li> 
                    <li class="list-group-item">{2}</li>`.format(l["ia1"], l["ia2"], l["ia3"]);
    } else if (l["ia5"] === "") {
        div = div + `<li class="list-group-item">{0}</li> 
                    <li class="list-group-item">{1}</li> 
                    <li class="list-group-item">{2}</li> 
                    <li class="list-group-item">{3}</li>`.format(l["ia1"], l["ia2"], l["ia3"], l["ia4"]);
    } else {
        div = div + `<li class="list-group-item">{0}</li> 
        <li class="list-group-item">{1}</li> 
                    <li class="list-group-item">{2}</li> 
                    <li class="list-group-item">{3}</li> 
                    <li class="list-group-item">{4}</li>`.format(l["ia1"], l["ia2"], l["ia3"], l["ia4"], l["ia5"]);
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
$('.return-to-top').click(function() { //add an animation to return back to the top of the screen
    $('body,html').animate({
        scrollTop: 0
    }, 100);
});

// when ?search= is entered after the url it is loaded into the search bar and automatically searched.
// this is used by the map
search(document.URL.split("?search=")[1])

function search(search) {
    var search = search
    if (search != undefined) {
        search = decodeURI(search)
        document.getElementById("ui").value = search
        addinterest((document.getElementById("ui").value).toLowerCase())

    }
}
// check if you prevesley searched something and keep it on the searchbar so if you refressh then it wont un search

var interest = document.URL.split("?interest=")[1]
if (interest != undefined) {
    interest = decodeURI(interest)
    if (interest == "college") {
        addColleges()
    } else if (interest == "military") {
        addMilitary()
    } else if (interest == "companies") {
        addCompanies()
    } else if (interest == "Union") {
        addUnions()
    } else {
        addinterest((interest))
    }

}
// add the code to invert the colors of the screen 
var inverted = false;
const css = `
img,.btn, .dropbtn, .dropbtn2, .nav-item, .dropdown-content,#search{
    -webkit-filter: invert(100%);
    -moz-filter: invert(100%);
    -o-filter: invert(100%);
    -ms-filter: invert(100%);
    z-index: 999;
}

html {
    -webkit-filter: invert(100%);
    -moz-filter: invert(100%);
    -o-filter: invert(100%);
    -ms-filter: invert(100%);
}`

const head = document.head
const style = document.createElement('style')
    // function to invert the colors of the screen 

function invertColor() {

    document.getElementById("inverted").classList.add("fa-sun-o")
    document.getElementById("inverted").classList.remove("fa-moon-o")
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    if (inverted) {
        head.removeChild(style);
        inverted = false;
        document.getElementById("inverted").classList.add("fa-moon-o");
        document.getElementById("inverted").classList.remove("fa-sun-o");
        return
    }
    inverted = true;
    head.appendChild(style);

    // document.getElementById("invert").
}
document.getElementById("invert").onclick = function() { invertColor() };