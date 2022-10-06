import json
f=open('olddata.json', encoding="utf8")
data = json.load(f) #returns dictionary
print(data.keys())
print(data.get("-MlQmX3psPflMMLNZkE3")['desc'])
name,logo=[],[]
for k in data.keys():
     name.append(data.get(k)['name'])
     logo.append(data.get(k)['logo'])
     
print(name,logo)
f.close()