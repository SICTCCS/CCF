
const automotive = [1, 434, 42, 131, 5, 3, 13, 21, 2421, 5, 231, 3]
const construction = [3]
const foyer = ["Hopf Equipment"]
const assembly = [69]
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
var butten=[]
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
    this.button.innerHTML = name+"<br>"
    this.button.classList.add("ddm2")
    this.button.href = ("index.html?search="+name)
    this.button.addEventListener("click", function () {
      
    });
    
  }
}

// all the button will open other screen and set querry tag to know to run a function on that page 
document.getElementById("allbutton").onclick = function () { window.open("index.html?search=","_self") };
document.getElementById("search").onclick = function () { window.open(("index.html?search="+document.getElementById("ui").value).toLowerCase(),"_self")};
document.getElementById("Manufacturing").onclick = function () { window.open("index.html?intrest=Manufacturing","_self") };
document.getElementById("Transportation").onclick = function () { window.open("index.html?intrest=Transportation","_self") };
document.getElementById("Engineering").onclick = function () { window.open("index.html?intrest=Engineering","_self") };
document.getElementById("HealthSciences").onclick = function () { window.open("index.html?intrest=Health Sciences","_self") };
document.getElementById("Communication").onclick = function () { window.open("index.html?intrest=Communication","_self") };
document.getElementById("PublicSafety").onclick = function () { window.open("index.html?intrest=Public Safety","_self") };
document.getElementById("CulinaryArts").onclick = function () { window.open("index.html?intrest=Culinary Arts","_self") };
document.getElementById("Construction").onclick = function () { window.open("index.html?intrest=Construction","_self") };
document.getElementById("ComputerTechnology").onclick = function () { window.open("index.html?intrest=Computer Technology","_self") };
document.getElementById("AnimalScience/Agriculture").onclick = function () { window.open("index.html?intrest=Animal Science/Agriculture","_self") };
document.getElementById("collegesbutton").onclick = function () { window.open("index.html?intrest=college","_self") };
document.getElementById("companiesbutton").onclick = function () { window.open("index.html?intrest=companies","_self") };
document.getElementById("militarybutton").onclick = function () { window.open("index.html?intrest=military","_self") };
document.onkeydown = function (e) {
  e = e || window.event;
  switch (e.which || e.keyCode) {
        case 13 : window.open(window.open(("index.html?search="+document.getElementById("ui").value).toLowerCase(),"_self"))
            break;
  }
}






toList(automotive, "Automotive")
toList(foyer, "Foyer")
toList(assembly, "Assembly")
toList(construction, "Construction")


// Original: 
// https://stackoverflow.com/questions/39253980/how-to-draw-a-point-on-image-based-on-coordinate-value-of-various-points-on-imag
var canvas = document.getElementById('imgcanvas');
var context = canvas.getContext("2d");

var mapSprite = new Image();
mapSprite.src = "https://mcamp117.github.io/NavTest/HTML/drawMaps/MASTER%20SICTC%20FLOOR%20PLAN.jpg";
var Button = function () {
    this.Sprite = new Image();
    this.Sprite.src = "/images/dropdown.png"
    this.Width = 75;
    this.Height = 75;
    this.XPos = 0;
    this.YPos = 0; 
}

var buttons = []
canvas.addEventListener("mousemove", mouseClicked, false);
canvas.addEventListener("click", mouseClicked, false);

var addButton = function (cord1,cord2) {

    var button = new Button();
    button.XPos = cord1 - (button.Width / 2);
    button.YPos = cord2 - button.Height;

    buttons.push(button);
}

function mouseClicked(event) {
  for (var i = 0; i < buttons.length; i++) {
    //https://stackoverflow.com/questions/55677/how-do-i-get-the-coordinates-of-a-mouse-click-on-a-canvas-element
    var rect = canvas.getBoundingClientRect()
    var currentMousePos = [event["clientX"]- rect.left-37.5,event["clientY"]- rect.top-35]
    var currentButtonPos = [buttons[i]["XPos"],buttons[i]["YPos"]]
    if (currentButtonPos[0]-25 < currentMousePos[0] && currentButtonPos[0]+25 > currentMousePos[0] && currentButtonPos[1]-25 < currentMousePos[1] && currentButtonPos[1]+25 > currentMousePos[1]) {
      document.getElementById("main").style.display = "block"
      document.getElementById("main").innerHTML=butten[i].innerHTML
      buttons[i].Sprite.src="/images/dropdowns.png"
    }
    else{buttons[i].Sprite.src = "/images/dropdown.png"}
  }
}

var draw = function () {
    context.fillStyle = "#000";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.drawImage(mapSprite, 0, 0, 700, 700);

    for (var i = 0; i < buttons.length; i++) {
        var tempMarker = buttons[i];
        context.drawImage(tempMarker.Sprite, tempMarker.XPos, tempMarker.YPos, tempMarker.Width, tempMarker.Height);
    }
};

addButton(530,180)

addButton(360,210)
addButton(300,150)

addButton(100,450)


setInterval(() => {draw()}, 100);