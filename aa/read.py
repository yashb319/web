l=[]
s=""
with open("cities.txt", "r") as f:
    s = f.read()

l = s.split("\n")

for i in range(len(l)):
    print('<option value="{value}">'.format(value = l[i]),l[i],'</option>')
