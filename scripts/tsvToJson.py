# thanks trent for the tutorial/crash course 
import csv
import json

def make_dict(row):
    return {
        row[0]: {
            "interests": row[1],
            "description": row[2],
            "pictureUrl": row[3],
            "webUrl": row[4],
            "type": row[5],
        }
    }

export = {}

#https://www.geeksforgeeks.org/simple-ways-to-read-tsv-files-in-python/
# open .tsv file
with open("collegeAndCareer.tsv", encoding="utf-8") as file:
       
    # Passing the TSV file to  
    # reader() function
    # with tab delimiter 
    # This function will
    # read data from file
    tsv_file = csv.reader(file, delimiter="\t")
     
    # printing data line by line
    for line in tsv_file:
        export = export | make_dict(line)

#https://www.geeksforgeeks.org/how-to-convert-python-dictionary-to-json/
   
# Convert and write JSON object to file
with open("collegeAndCareer.json", "w") as outfile: 
    json.dump(export, outfile)

