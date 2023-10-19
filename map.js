const automotive = ["Hopf Equipment", "H&R Agri-Power", "Henderson Ford", "Ivy Tech Automotive", "Evapar, Inc.", "Hutson, Inc.", "Boyd Company", "Black Equipment", "Wabash Valley College"]
const construction = ["Healthy Spaces", "Hydromax Plumbing Inc.", "BNG Heating & Cooling", "Indiana Laborers Training Fund", "Evansville Electrical JATC", "Sheet Metal Workers Local 20", "Southwestern Indiana Builders Association", "A+ Derr Heating & Cooling", "Bricklayers Local 4", "Greer's Flooring America", "Carpenter/IKORCC", "Danco Construction, Inc."]
const foyer = ["Kiesel Enterprises, INC", "Red Spot Paint & Varnish", "Parrish Consulting Services, Inc.", "AmeriQual Group LLC", "Berry Global", "Hafer", "Uniseal, LG Chem", "Jasper Rubber Products, Inc", "University of Evansville", "Vincennes University", "Traylor Brothers", "AstraZeneca", "Menard Inc.", "Universal Technical Institute", "Silgan Closures", "Matrix Design Group", "PIA Automation", "University of Southern Indiana -Dept of Engineering", "Industrial Filter Manufacturers", "Brake Supply Company Inc", "KIMBALL ELECTRONICS", "Henderson Community College", "McDonald's", "Warehouse Services, Inc.", "Ascension St. Vincent Evansville", "Indiana Tech", "Keller Schroeder", "Murray State University", "Sign Crafters, Inc.", "Trilogy Health Services", "Plumbers & Steamfitters LU 136", "NIX", "S & S Machine Shop, Inc", "American Senior Communities", "Triad Fabricators, LLC", "Purdue Polytechnic Vincennes", "SABIC", "ProgressiveHealth", "ProRehab", "Koorsen Fire & Security", "FLANDERS", "Meyer Distributing & Meyer Logistics", "WNIN Tri-State Public Media, Inc.", "Owensboro Community", "Southern Illinois University", "Wabash Valley College Radio/TV", "Vanderburgh County Sheriff's Office", "WEOA RADIO", "HCC FAME", "Murray State University", "Marine Corps", "Prodigy Mold & Tool, Inc.", "BFit"]
const assembly = ["United States Navy", "Good Samaritan Home", "LIFT Academy", "Evansville Police Department", "Evansville Fire Department", "Southern Illinois University School of Health Sciences", "Infinity Molding & Assembly, Inc.", "US Army", "Deaconess", "Ciholas, Inc.", "BWX Technologies", "Metronet", "ECS Solutions Inc", "Project Associates Inc.", "Gribbins Specialty Group, Inc.", "The Arc Southwest Indiana", "Torsion Plastics", "Indiana Job Corps", "IU Luddy School of Informatics, Computing, and Engineering", "Hella Electronics Corp.", "Illinois Eastern Community Colleges", "Rose-Hulman Institute of Technology", "FedEx Ground", "Alliance Technical Group, LLC", "Franklin College", "ECS LIMITED", "Ivy Tech Community College"]
    // makes list of loctaions

// OLD TOLIST keep might eventualy go back to a img tag instade of canvas
// function toList(listy, name,id) {
//   let all = document.getElementById(id)
//   let div = document.createElement("div")
//   div.innerHTML = name
//   div.classList.add("ddm")
//   all.appendChild(div)
//   for (var i in listy) {
//     listy[i] = new b(listy[i])
//     all.appendChild(listy[i].button)
//   }
// }
var butten = []
    // makes list that can be hover over to show whats in them 
function toList(listy, name) {
    let all = document.createElement("div")
    let div = document.createElement("div")
    div.innerHTML = name
    div.classList.add("ddm")
    all.appendChild(div)
    for (var i in listy) {
        listy[i] = new b(listy[i])
        all.appendChild(listy[i].button)
    }
    butten.push(all)
}

// creates a class for the buttons so i can add href and classed to the button
class b {
    constructor(name) {
        this.button = document.createElement("a")
        this.button.innerHTML = name + "<br>"
        this.button.classList.add("ddm2")
        this.button.href = ("index.html?search=" + name)
        this.button.addEventListener("click", function() {

        });

    }
}

// all the button will open other screen and set querry tag to know to run a function on that page 
document.getElementById("allbutton").onclick = function() { window.open("index.html?search=", "_self") };
document.getElementById("search").onclick = function() { window.open(("index.html?search=" + document.getElementById("ui").value).toLowerCase(), "_self") };
document.getElementById("Manufacturing").onclick = function() { window.open("index.html?intrest=Manufacturing", "_self") };
document.getElementById("Transportation").onclick = function() { window.open("index.html?intrest=Transportation", "_self") };
document.getElementById("Engineering").onclick = function() { window.open("index.html?intrest=Engineering", "_self") };
document.getElementById("HealthSciences").onclick = function() { window.open("index.html?intrest=Health Sciences", "_self") };
document.getElementById("Communication").onclick = function() { window.open("index.html?intrest=Communication", "_self") };
document.getElementById("PublicSafety").onclick = function() { window.open("index.html?intrest=Public Safety", "_self") };
document.getElementById("CulinaryArts").onclick = function() { window.open("index.html?intrest=Culinary Arts", "_self") };
document.getElementById("Construction").onclick = function() { window.open("index.html?intrest=Construction", "_self") };
document.getElementById("ComputerTechnology").onclick = function() { window.open("index.html?intrest=Computer Technology", "_self") };
document.getElementById("AnimalScience/Agriculture").onclick = function() { window.open("index.html?intrest=Animal Science/Agriculture", "_self") };
document.getElementById("collegesbutton").onclick = function() { window.open("index.html?intrest=college", "_self") };
document.getElementById("companiesbutton").onclick = function() { window.open("index.html?intrest=companies", "_self") };
document.getElementById("militarybutton").onclick = function() { window.open("index.html?intrest=military", "_self") };
document.onkeydown = function(e) {
    e = e || window.event;
    switch (e.which || e.keyCode) {
        case 13:
            window.open(window.open(("index.html?search=" + document.getElementById("ui").value).toLowerCase(), "_self"))
            break;
    }
}




// Runs list of them

toList(construction, "Construction")
toList(foyer, "Foyer")
toList(assembly, "Assembly")
toList(automotive, "Automotive")


// Original: 
// https://stackoverflow.com/questions/39253980/how-to-draw-a-point-on-image-based-on-coordinate-value-of-various-points-on-imag
var canvas = document.getElementById('imgcanvas');
var context = canvas.getContext("2d");

canvas.addEventListener("mousemove", mouseClicked, false);
canvas.addEventListener("click", mouseClicked, false);
// makes map sprite so i can uses the cord on the image and will resize to the size of the users screen
var mapSprite = new Image();
mapSprite.src = "./images/sictcMapFinal.jpg";


var Button = function() {
    this.Sprite = new Image();
    this.Sprite.src = "./images/dropdown.png"
    this.Width = 75;
    this.Height = 75;
    this.XPos = 0;
    this.YPos = 0;
}

var buttons = []

var addButton = function(cord1, cord2) {

    var button = new Button();
    button.XPos = cord1 - (button.Width / 2);
    button.YPos = cord2 - button.Height;

    buttons.push(button);
}

addButton(620, 440)
addButton(360, 210)
addButton(315, 150)
addButton(100, 450)

function mouseClicked(event) {
    for (var i = 0; i < buttons.length; i++) {
        //https://stackoverflow.com/questions/55677/how-do-i-get-the-coordinates-of-a-mouse-click-on-a-canvas-element
        var rect = canvas.getBoundingClientRect()
        var currentMousePos = [event["clientX"] - rect.left - 37.5, event["clientY"] - rect.top - 35]
        var currentButtonPos = [buttons[i]["XPos"], buttons[i]["YPos"]]
        if (currentButtonPos[0] - 25 < currentMousePos[0] && currentButtonPos[0] + 25 > currentMousePos[0] && currentButtonPos[1] - 25 < currentMousePos[1] && currentButtonPos[1] + 25 > currentMousePos[1]) {
            document.getElementById("main").style.display = "block"
            document.getElementById("main").innerHTML = butten[i].innerHTML
            buttons[i].Sprite.src = "./images/dropdowns.png"
        } else { buttons[i].Sprite.src = "./images/dropdown.png" }
    }
}
// draws the map 
var draw = function() {
    context.fillStyle = "#000";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.drawImage(mapSprite, 0, 0, 700, 700);

    for (var i = 0; i < buttons.length; i++) {
        var tempMarker = buttons[i];
        context.drawImage(tempMarker.Sprite, tempMarker.XPos, tempMarker.YPos, tempMarker.Width, tempMarker.Height);
    }
};
// plans the button on the map


setInterval(() => { draw() }, 100);