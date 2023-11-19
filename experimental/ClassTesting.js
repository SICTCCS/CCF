//read in the file
const FirebaseObject = require('FirebaseObject');
function createObject(){
   
        //constant data = snapshot.val() which makes snapshot a readable dictionary

        // const fs = require('fs');

        // //reads the file using the readFileSync function
        // let rawdata = fs.readFileSync('sictc-career-fair-default-rtdb-export.json');
        // var career = JSON.parse(rawdata);

        var json = require('C:/Users/padawan/Documents/CareerFair/sort/rawdata.json');
        var data = [];
        for (let j in json["Items"]){
            data.push(json["Items"][j]);
        }
        
        console.log(data)
        //print the file to the console
        //console.log(rawdata);
        // for (let i in career){
        //     console.log(i)
        // }
        return data;
        
    
}

career=createObject();
//console.log(career.desc);


//implement the object
//save the objects to a list
var items=[]
for(let i in career){
    items.push(new FirebaseObject(i.desc,i.ia1,i.ia2,i.ia3,i.ia4,i.ia5,i.logo,i.name,i.type,i.web));
}

//FirebaseObject(career);
//console.log(FirebaseObject(career));
//console.log(FirebaseObject.desc);



//print the list.
console.log(items);