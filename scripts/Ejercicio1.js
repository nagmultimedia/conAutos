	let cadena="Hola, esta ES UNA PRUEBA";  
	let mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	
	function CantidadMayusculas (st){
		let contar=0;
		for (let i = 0; i < mayusculas.length; i++) {
			for (var x = 0; x < st.length; x++) {
				if(st[x]==mayusculas[i]){
				contar+=1;
				}
			}
		}
		return contar;
	}

	console.log(CantidadMayusculas(cadena));
