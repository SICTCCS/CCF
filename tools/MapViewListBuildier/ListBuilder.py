filename="sheet.csv"
auto,assem,foyer,constr="","","",""
with open(filename,'r') as f:
     file=f.readlines()
     for row in file:
          data=row.rstrip().split(",")
          if data[1]=="1":
               foyer+=data[0].rstrip()+","
          elif data[1]=="2":
               assem+=data[0].rstrip()+","
          elif data[1]=="3":
               auto+=data[0].rstrip()+","
          else:
               constr+=data[0].rstrip()+","
          
          # company,num = row.split(",")
print(auto[:-1],"\n")
print(assem[:-1],"\n")
print(foyer[:-1],"\n")
print(constr[:-1],"\n")