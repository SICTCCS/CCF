//open unsorted json file
var json = require('C:/Users/padawan/Documents/CareerFair/sort/rawdata.json');

//separate each dict from the firebase tag and out of the items tag
var data = [];
for (let j in json["Items"]){
    data.push(json["Items"][j]);
}

//sort them by name
data.sort(function(a, b) {
    return a.name.localeCompare(b.name);
});

//rewrite json var to recreate the original file with firebase tags
var x = 0;
for(let i in json["Items"]){
    //console.log(data[x].name)
    json["Items"][i]=data[x];
    x=x+1;
}

//convert edited data to json string object
var newdata = JSON.stringify(json);

//write a new file with the sorted data
var fs = require('fs');
fs.writeFile("sort/sorted.json", newdata, function(err, result) {
    if(err) console.log('error', err);
});