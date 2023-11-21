const automotive = ["Silgan Closures","Good Samaritan Home","Job CORPS","Hydromax Plumbing","On the Spot Utility Resources","Specialty Tooling Inc.","Rose-Hulman","Universal Technical Institute","Wabash Valley College","Southeastern Illinois College","Larry's Automotive Repair","Expressway Auto Group","H&R Agri-Power","Rudd Equipment Company","Lux Motors","Boss shop","Kenny Kent Toyota","Romain Crosspoint"]
const construction = ["Greer's Flooring America","Danco Construction","Vincennes University College of Technology","WNIN Tri-State Public Media","Hutson","Warehouse Services","Vincennes University Precision Machining Technology","Vincennes University","Murray State University","S & S Machine Shop","Brake Supply","Easterseals Rehabilitation Center","Aerotek","Wabash Valley College - Physical Therapist Assistant Program","Holiday Health Care","Inotiv","Built to Succeed / Indiana Careers in Construction","Evapar","SoINFAME","WNIN Tri-State Public Media","BWXT","Sheet Metal Workers Local 20","Plumbers & Steamfitters LU 136","HCC FAME","Koorsen Fire and Security","Farbest Foods","S & S Machine Shop","AmeriQual Group","IU Luddy School of Informatics","Kiesel Enterprises","USI College of Nursing and Health Professions","Ciholas","Ragle","Southwestern Indiana Builders Association","Hoosier Craftsman","Melkay","Truck Centers","Parrish Consulting Services","Cutting Edge Paint Company","IUOE Local 181","BNG Heating & Cooling"]
const foyer = ["Meyer Truck Equipment","Toyota","American Senior Communities","Indiana Tech","Murray State University School of Nursing and Health Professions","Indiana Laborers Training Fund","Gribbins Specialty Group","Indiana State Police","AstraZeneca","University of Southern Indiana - Dept. of Engineering","Vermeer Midwest","Fibertech Plastics","Indiana Air National Guard","Rexing Companies","Brown Equipment Company (BEC)","American Grease and Septic","Euronique Inc.","Industrial Filter Manufacturers","EBN Bostwick Braun","Tri-State Orthopaedics","Branchville Correctional Facility","Matrix Design Group","D-Patrick","E&B Paving","The State Group","Evansville Fire Department","FLANDERS","Owensboro Community & Technical College Vet Tech Program","Vincennes University Precision Machining Technology","ProRehab","American Senior Communities","US Army","NIX","Murray State University School of Nursing and Health Professions","Berry Global","Ivy Tech CC - School of Technology","Deaconess Health System","BFIT","Deaconess Cardiopulmonary Rehab and Deaconess Heart Group","Material Management Technologies","Purdue Polytechnic Institute/Vincennes","University of Southern Indiana Dental Assisting and Dental Hygiene Programs","Murray State University  / School of Engineering","FLANDERS","Aflac","University of Southern Indiana - Romain College of Business","HMC Gears","USI Food and Nutrition Dept.","Southern Illinois University - School of Aviation","Red Spot Paint & Varnish","USI Communication and Media Department","Illinois Eastern Community Colleges","University of Southern Indiana","Pappa Bear's Catering"]
const assembly = ["Trilogy Health Services","Inotiv","Healthy Spaces","Boyd Company","US Army","","Vincennes University  - Architectural Studies","The Modern College of Design","Sternberg Automotive Group","Vincennes University Health Sciences","Ascension St. Vincent","Bricklayers Local 4","Indiana Laborers Training Fund","PIA Automation","Ivy Tech Community College Automotive Evansville","Evansville Electrical JATC","Visiting Angels Evansville","Indiana State Police","Toyota Boshoku Indiana","ECS Solutions","Wabash Valley College Radio/TV","Evansville Police Department","Mainstream Fiber Networks","Project Associates Inc.","SRG Global","Armor Fire Protection DBA Western States Fire Protection","University of Evansville","HireLevel","Nurse Anesthesia Program at the University of Evansville"]
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
var buttonList = []
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
    buttonList.push(all)
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
// document.getElementById("search").onclick = function() { window.open(("index.html?search=" + document.getElementById("ui").value).toLowerCase(), "_self") };
// document.getElementById("Manufacturing").onclick = function() { window.open("index.html?intrest=Manufacturing", "_self") };
// document.getElementById("Transportation").onclick = function() { window.open("index.html?intrest=Transportation", "_self") };
// document.getElementById("Engineering").onclick = function() { window.open("index.html?intrest=Engineering", "_self") };
// document.getElementById("HealthSciences").onclick = function() { window.open("index.html?intrest=Health Sciences", "_self") };
// document.getElementById("Communication").onclick = function() { window.open("index.html?intrest=Communication", "_self") };
// document.getElementById("PublicSafety").onclick = function() { window.open("index.html?intrest=Public Safety", "_self") };
// document.getElementById("CulinaryArts").onclick = function() { window.open("index.html?intrest=Culinary Arts", "_self") };
// document.getElementById("Construction").onclick = function() { window.open("index.html?intrest=Construction", "_self") };
// document.getElementById("ComputerTechnology").onclick = function() { window.open("index.html?intrest=Computer Technology", "_self") };
// document.getElementById("AnimalScience/Agriculture").onclick = function() { window.open("index.html?intrest=Animal Science/Agriculture", "_self") };
// document.getElementById("collegesbutton").onclick = function() { window.open("index.html?intrest=college", "_self") };
// document.getElementById("companiesbutton").onclick = function() { window.open("index.html?intrest=companies", "_self") };
// document.getElementById("militarybutton").onclick = function() { window.open("index.html?intrest=military", "_self") };
// document.getElementById("foyerBTN").onclick = function() { window.open("index.html?area=1", "_self") };

// document.getElementById("foyerBTN").onclick = function() { window.open("index.html?intrest=military", "_self") };
// document.getElementById("militarybutton").onclick = function() { window.open("index.html?intrest=military", "_self") };
// document.getElementById("militarybutton").onclick = function() { window.open("index.html?intrest=military", "_self") };
// document.getElementById("militarybutton").onclick = function() { window.open("index.html?intrest=military", "_self") };
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

// canvas.addEventListener("mousemove", mouseClicked, false);
canvas.addEventListener("click", mouseClicked, false);
// makes map sprite so i can uses the cord on the image and will resize to the size of the users screen
var mapSprite = new Image();
mapSprite.src = "./images/newMap.png";


var Button = function(btn) {
    this.Sprite = new Image();
    if(btn==1){
        this.Sprite.src = "./images/1.png"
    }else if(btn==2){
        this.Sprite.src = "./images/2.png"
    }else if(btn==3){
        this.Sprite.src = "./images/3.png"
    }else if(btn==4){
        this.Sprite.src = "./images/4.png"
    }
    this.Width = 80;
    this.Height = 80;
    this.XPos = 0;
    this.YPos = 0;
}

var buttons = []

var addButton = function(cord1, cord2,btn) {

    var button = new Button(btn);
    button.XPos = cord1 - (button.Width / 2);
    button.YPos = cord2 - button.Height;

    buttons.push(button);
}

// addButton(550, 440)
// addButton(355, 240)
// addButton(315, 175)
// addButton(140, 430)

addButton(115, 100,1) //construction
addButton(250, 100,2) //foyer
addButton(390, 100,4) //assembly
addButton(545, 100,3) //auto



// // Event listener for mouse click

function mouseClicked(event) {
    for (var i = 0; i < buttons.length; i++) {
        //https://stackoverflow.com/questions/55677/how-do-i-get-the-coordinates-of-a-mouse-click-on-a-canvas-element
        var rect = canvas.getBoundingClientRect()
        var currentMousePos = [event["clientX"] - rect.left - 37.5, event["clientY"] - rect.top - 35]
        var currentButtonPos = [buttons[i]["XPos"], buttons[i]["YPos"]]
        if (currentButtonPos[0] - 25 < currentMousePos[0] && currentButtonPos[0] + 25 > currentMousePos[0] && currentButtonPos[1] - 25 < currentMousePos[1] && currentButtonPos[1] + 25 > currentMousePos[1]) {
            document.getElementById("main").style.display = "block"
            document.getElementById("main").innerHTML = buttonList[i].innerHTML
            
            if(i==0){
                buttons[i].Sprite.src = "./images/1.png"
                mapSprite.src = "./images/conMap.png";
            }else if(i==1){
                buttons[i].Sprite.src = "./images/2.png"
                mapSprite.src = "./images/foyerMap.png";
            }else if(i==2){
                buttons[i].Sprite.src = "./images/4.png"
                mapSprite.src = "./images/assemblyMap.png";
            }else if(i==3){
                buttons[i].Sprite.src = "./images/3.png"
                mapSprite.src = "./images/autoMap.png";
            }
            // buttons[i].Sprite.src = "./images/dropdowns.png"
        } else { if(i==0){
            buttons[i].Sprite.src = "./images/1.png"
        }else if(i==1){
            buttons[i].Sprite.src = "./images/2.png"
        }else if(i==2){
            buttons[i].Sprite.src = "./images/4.png"
        }else if(i==3){
            buttons[i].Sprite.src = "./images/3.png"
        }}
    }
}

// function mouseClicked(event) {
//     // getPixelColor();
//     for (var i = 0; i < buttons.length; i++) {
//         //https://stackoverflow.com/questions/55677/how-do-i-get-the-coordinates-of-a-mouse-click-on-a-canvas-element
//         var rect = canvas.getBoundingClientRect()
//         var currentMousePos = [event["clientX"] - rect.left - 37.5, event["clientY"] - rect.top - 35]
//         var currentButtonPos = [buttons[i]["XPos"], buttons[i]["YPos"]]
//             document.getElementById("main").style.display = "block"
//             document.getElementById("main").innerHTML = buttonList[i].innerHTML
//             buttons[i].Sprite.src = "./images/dropdown.png"
                   
//     }
// }
// console.log(document.getElementById("foyerBTN"))
// document.getElementById("foyerBTN").onClick(foyerAdd());


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