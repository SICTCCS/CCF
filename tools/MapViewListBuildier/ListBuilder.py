filename="sheet.csv"
auto,assem,common,constr="","","",""
with open(filename,'r') as f:
     file=f.readlines()
     for row in file:
          data=row.rstrip().split(",")
          if data[1]=="1":
               auto+=data[0].rstrip()+","
          elif data[1]=="2":
               auto+=data[0].rstrip()+","
          elif data[1]=="3":
               auto+=data[0].rstrip()+","
          else:
               constr+=data[0].rstrip()+","
          
          # company,num = row.split(",")
print(auto)
# print(assem)
# print(common)
# print(constr)