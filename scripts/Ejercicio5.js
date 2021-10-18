let var1=[1,2,4,6,7,8];
let var2=[1,2,4,5,6,7,8];

let union= [];

for (let i=0; i<var1.length; i++){
	union.push(var1[i]);
}
for (let i=0; i<var2.length; i++){
	union.push(var2[i]);	
}

let ordenaditos = union.sort((p1, p2) => p1 - p2);
console.log(ordenaditos);
