
let arry = [];

let repeticiones= prompt("Introduzca un número, por favor");

for (let i=0; i<repeticiones; i++){
	arry.push(Math.round(Math.random()*100));
}

document.getElementById('arryValores').innerHTML = arry;
