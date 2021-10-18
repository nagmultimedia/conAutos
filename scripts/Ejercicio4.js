let arry = [];

for (let i=0; i<10; i++){
	arry.push(Math.round(Math.random()*100));
}

let ordenaditos = arry.sort((p1, p2) => p1 - p2);
console.log(ordenaditos);