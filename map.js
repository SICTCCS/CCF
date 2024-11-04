const automotive = ['Larry\'s Automotive','D Patrick','Tristate CDL School','Boyd Cat','Rudd Equipment','Rexing Companies','Diamond Equipment','Peabody','Evapar','Kenny Kent','Hyundai of Evansville','Wabash Volley College','James R. Poshard & Sons Trucking','Ivy Tech Indianapolis','Expressway Auto Group']
const construction = ['Harrell-Fish Inc.','SIBA','Indiana Laborers Train. 561','E & B Paving','Plumbers & Steamfitters 136','Danco','Healthy Spaces','IUOE Local 181 ','Indiana Careers in Const.','Evansville Electrical JATC','SMART Local 20 Sheet Metal','IEC Electrical']
const foyer = ['Meyer Truck Equip.','NIX','BWX Technologies','Ascension','HMC Gears','PC Quest','Deaconess','Berry Global','UE','Industrial Filter Mfg.','TMMI','SoIN FAME','VU AMT','Red Spot','Koch Finishing Systems','Hanger Clinic','WNIN','Mainstream Fiber Network','Morley & Associates','Academic Transport','Wabash Valley College Radio/TV','Wabash Valley College PTA','Senior Helpers','Metal Fabrication LLC','Murry State','Flanders','Silgan Enclosures','Astra Zeneca','Koorsen Fire & Security','SRG Global','Hoehn Plastics','B Fit Gym & Fitness','Bowen Engineering ','Matrix Design Groups','Pappa Bears Catering','Purdue Polytechnic','IVY TECH','Ameriqual Group','Compassus Hospice','Trilogy Helth Services','ProRehab','Vanderburgh Co.Health Dept.','ECHO Community Healthcare','APR Plastics','Tristate Ortho Surgeons','Oasis Dementia Care','CINTAS Uniforms','American Senior Comm.','DaVita','VU','TMI Frabrications','Woc & Heritage Petroleum','Murry State Ag Health','Polyvants','Easter Seals Rehabilitation']
const assembly = ['Army','Army Reserves','Indiana State Police','Vanderburgh Co Sheriff','Evansville Police Dept.','Anchor Industries','USI HR','USI Manufacturing','USI Nursing','USI Food & Nutrition','USI Admissions','Project Associates','Ciholas Inc.','Parrish Consulting','IU Luddy School of Comp','ECS Solutions','Indiana Air National Gaurd','USI Army ROTC','WKY Ag & Food Science','Owensboro Comm & Tech','Kentucky Wesleyan College','Rose-Hulman','Oakland City University','Hntington University','Indiana University','Brescia University','Taylor University','Franklin College','Southeastern IL College','Evansville-Vand. Central Dispatch','Lincoln Tech College','SIU Carbondale']
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
var buttonListCon = []
var buttonListAssm = []
var buttonListAuto = []
var buttonListFoy = []
//     // makes list that can be hover over to show whats in them 
function toListConstruction(listy, name) {
    let all = document.createElement("div")
    let div = document.createElement("div")
    div.innerHTML = name
    div.classList.add("ddm")
    all.appendChild(div)
    for (var i in listy) {
        listy[i] = new b(listy[i])
        all.appendChild(listy[i].button)
    }
    buttonListCon.push(all)
}

function toListAutomotive(listy, name) {
    let all = document.createElement("div")
    let div = document.createElement("div")
    div.innerHTML = name
    div.classList.add("ddm")
    all.appendChild(div)
    for (var i in listy) {
        listy[i] = new b(listy[i])
        all.appendChild(listy[i].button)
    }
    buttonListAuto.push(all)
}

function toListFoyer(listy, name) {
    let all = document.createElement("div")
    let div = document.createElement("div")
    div.innerHTML = name
    div.classList.add("ddm")
    all.appendChild(div)
    for (var i in listy) {
        listy[i] = new b(listy[i])
        all.appendChild(listy[i].button)
    }
    buttonListFoy.push(all)
}

function toListAssembly(listy, name) {
    let all = document.createElement("div")
    let div = document.createElement("div")
    div.innerHTML = name
    div.classList.add("ddm")
    all.appendChild(div)
    for (var i in listy) {
        listy[i] = new b(listy[i])
        all.appendChild(listy[i].button)
    }
    buttonListAssm.push(all)
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

toListConstruction(construction, "Construction")
toListFoyer(foyer,"Foyer")
toListAssembly(assembly, "Assembly")
toListAutomotive(automotive, "Automotive")


// Original: 
// https://stackoverflow.com/questions/39253980/how-to-draw-a-point-on-image-based-on-coordinate-value-of-various-points-on-imag
// var canvas = document.getElementById('imgcanvas');
// var context = canvas.getContext("2d");

// canvas.addEventListener("mousemove", mouseClicked, false);
//canvas.addEventListener("click", mouseClicked, false);
// makes map sprite so i can uses the cord on the image and will resize to the size of the users screen
// var mapSprite = new Image();
// mapSprite.src = "./images/newMap.png";
document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('mapCanvas');
    var ctx = canvas.getContext('2d');
    var container = document.getElementById("main")
  
    // Draw your map on the canvas
    // Example: Draw a red square
    // ctx.fillStyle = 'red';
    // ctx.fillRect(100, 100, 200, 200);

    const img = document.getElementById("map");
    ctx.drawImage(img, -100, 0,1000,600);

    

  
    canvas.addEventListener('click', function(event) {
      var x = event.offsetX;
      var y = event.offsetY;
  
      // Get the color of the clicked pixel
      var pixel = ctx.getImageData(x, y, 1, 1).data;
      var color = 'rgb(' + pixel[0] + ',' + pixel[1] + ',' + pixel[2] + ')';
  
      // Check the color and perform actions accordingly
      if (color === 'rgb(255,0,0)') {
        // alert('You clicked on the red area!');
        for (var i = 0; i < toListAssembly.length; i++) {
                    //https://stackoverflow.com/questions/55677/how-do-i-get-the-coordinates-of-a-mouse-click-on-a-canvas-element
                    // var rect = canvas.getBoundingClientRect()
                    // var currentMousePos = [event["clientX"] - rect.left - 37.5, event["clientY"] - rect.top - 35]
                    // var currentButtonPos = [buttons[i]["XPos"], buttons[i]["YPos"]]
                        container.style.display = "block"
                        container.innerHTML = buttonListAssm[i].innerHTML
                        // buttons[i].Sprite.src = "./images/dropdown.png"
                               
                }

        // Add your custom action for the red area
      }else if(color === 'rgb(0,0,255)'){
        //alert('You clicked on the blue area!');
        for (var i = 0; i < toListAutomotive.length; i++) {
            //https://stackoverflow.com/questions/55677/how-do-i-get-the-coordinates-of-a-mouse-click-on-a-canvas-element
            var rect = canvas.getBoundingClientRect()
            // var currentMousePos = [event["clientX"] - rect.left - 37.5, event["clientY"] - rect.top - 35]
            // var currentButtonPos = [buttons[i]["XPos"], buttons[i]["YPos"]]
                container.style.display = "block"
                container.innerHTML = buttonListAuto[i].innerHTML
                // buttons[i].Sprite.src = "./images/dropdown.png"
                       
        }
      }else if(color === 'rgb(255,222,89)'){
        //alert('You clicked on the yeller area!');
        for (var i = 0; i < toListConstruction.length; i++) {
            //https://stackoverflow.com/questions/55677/how-do-i-get-the-coordinates-of-a-mouse-click-on-a-canvas-element
            var rect = canvas.getBoundingClientRect()
            // var currentMousePos = [event["clientX"] - rect.left - 37.5, event["clientY"] - rect.top - 35]
            // var currentButtonPos = [buttons[i]["XPos"], buttons[i]["YPos"]]
                container.style.display = "block"
                container.innerHTML = buttonListCon[i].innerHTML
                // buttons[i].Sprite.src = "./images/dropdown.png"
                       
        }
      }else if(color === 'rgb(0,255,0)'){
        //alert('You clicked on the greenly area!');
        for (var i = 0; i < toListFoyer.length; i++) {
            //https://stackoverflow.com/questions/55677/how-do-i-get-the-coordinates-of-a-mouse-click-on-a-canvas-element
            var rect = canvas.getBoundingClientRect()
            // var currentMousePos = [event["clientX"] - rect.left - 37.5, event["clientY"] - rect.top - 35]
            // var currentButtonPos = [buttons[i]["XPos"], buttons[i]["YPos"]]
                container.style.display = "block"
                container.innerHTML = buttonListFoy[i].innerHTML
                // buttons[i].Sprite.src = "./images/dropdown.png"
                       
        }
      }
      // Add more conditions based on the colors you have on your map
    });
  });
  


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

// addButton(115, 100,1) //construction
// addButton(250, 100,2) //foyer
// addButton(390, 100,4) //assembly
// addButton(545, 100,3) //auto



// // Event listener for mouse click

// function mouseClicked(event) {
//     for (var i = 0; i < buttons.length; i++) {
//         //https://stackoverflow.com/questions/55677/how-do-i-get-the-coordinates-of-a-mouse-click-on-a-canvas-element
//         var rect = canvas.getBoundingClientRect()
//         var currentMousePos = [event["clientX"] - rect.left - 37.5, event["clientY"] - rect.top - 35]
//         var currentButtonPos = [buttons[i]["XPos"], buttons[i]["YPos"]]
//         if (currentButtonPos[0] - 25 < currentMousePos[0] && currentButtonPos[0] + 25 > currentMousePos[0] && currentButtonPos[1] - 25 < currentMousePos[1] && currentButtonPos[1] + 25 > currentMousePos[1]) {
//              
            
//             if(i==0){
//                 buttons[i].Sprite.src = "./images/1.png"
//                 mapSprite.src = "./images/conMap.png";
//             }else if(i==1){
//                 buttons[i].Sprite.src = "./images/2.png"
//                 mapSprite.src = "./images/foyerMap.png";
//             }else if(i==2){
//                 buttons[i].Sprite.src = "./images/4.png"
//                 mapSprite.src = "./images/assemblyMap.png";
//             }else if(i==3){
//                 buttons[i].Sprite.src = "./images/3.png"
//                 mapSprite.src = "./images/autoMap.png";
//             }
//             // buttons[i].Sprite.src = "./images/dropdowns.png"
//         } else { if(i==0){
//             buttons[i].Sprite.src = "./images/1.png"
//         }else if(i==1){
//             buttons[i].Sprite.src = "./images/2.png"
//         }else if(i==2){
//             buttons[i].Sprite.src = "./images/4.png"
//         }else if(i==3){
//             buttons[i].Sprite.src = "./images/3.png"
//         }}
//     }
// }

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
// var draw = function() {
//     context.fillStyle = "#000";
//     context.fillRect(0, 0, canvas.width, canvas.height);

//     context.drawImage(mapSprite, 0, 0, 700, 700);

//     for (var i = 0; i < buttons.length; i++) {
//         var tempMarker = buttons[i];
//         context.drawImage(tempMarker.Sprite, tempMarker.XPos, tempMarker.YPos, tempMarker.Width, tempMarker.Height);
//     }
// };
// plans the button on the map


// setInterval(() => { draw() }, 100);
