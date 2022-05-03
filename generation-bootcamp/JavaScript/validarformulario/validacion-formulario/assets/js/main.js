const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const formulario = document.querySelector('form');
console.log(formulario);

const inputs = document.querySelectorAll('input');
console.log(inputs);

const nombreError = document.querySelector('#errorNombre');
const nombreApellido = document.querySelector('#errorApellido');
const nombreEmail = document.querySelector('#errorEmail');
const nombrePassword = document.querySelector('#errorPassword');
const nombreTelefono = document.querySelector('#errorTelefono');

// console.log(nombreError);
// console.log(nombreApellido);
// console.log(nombreEmail);
// console.log(nombrePassword);
// console.log(nombreTelefono);

const statusInf = {
	nombre:false,
	apellido:false,
	email:false,
	password:false,
	telefono:true
}


inputs.forEach((input,i,inputsCompleto)=>{
	// console.log(input);
	// console.log(i);
	// console.log(inputsCompleto);
	input.addEventListener('keyup',(e)=>{
		//console.log(e.target.name);
		switch(e.target.name){
			case "nombre":
				console.log(e.target.value);
				if(expresiones.nombre.test(e.target.value)){
					console.log('Nombre Valido');
					nombreError.textContent = '';
					statusInf.nombre=true;
				}
				else{
					console.log('Nombre Incorrecto');
					nombreError.textContent = 'Error'
					statusInf.nombre=false;
				}
				break;
			case "apellido":
				if(expresiones.nombre.test(e.target.value)){
					console.log('Apellido Valido');
					nombreApellido.textContent = '';
					statusInf.apellido=true;
				}
				else{
					console.log('Apellido Incorrecto');
					nombreApellido.textContent = 'Error'
					statusInf.apellido=false;

				}
				break;
			case "email":
				if(expresiones.email.test(e.target.value)){
					console.log('Email Valido');
					nombreEmail.textContent = '';
					statusInf.email=true;

				}
				else{
					console.log('Email Incorrecto');
					nombreEmail.textContent = 'Error'
					statusInf.email=false;

				}
				break;
			case "password":
				if(expresiones.password.test(e.target.value)){
					console.log('Password Valido');
					nombrePassword.textContent = '';
					statusInf.password=true;

				}
				else{
					console.log('Password Incorrecto');
					nombrePassword.textContent = 'Error'
					statusInf.password=false;

				}
				break;
			case "telefono":
				if(expresiones.telefono.test(e.target.value)){
					console.log('Telefono Correcto');
					nombreTelefono.textContent = '';
					statusInf.telefono=true;


				}
				else{
					console.log('Telefono Incorrecto');
					nombreTelefono.textContent = 'Error';
					statusInf.telefono=false;

				}
				break;
			
		}
	});
});

formulario.addEventListener('submit',(e)=>{
	e.preventDefault();
	let bandera = true;
	const check = document.querySelector("#terminos").checked;
	for (const [clave, valor] of Object.entries(statusInf)) {
		console.log("La clave es: " + clave);
		console.log("El valor es: " + valor);
		if(valor==false){
			bandera = false;
		}
	}

	// console.log(Object.values(statusInf));
	// console.log(Object.values(statusInf).includes(false));
	// if(!Object.values(statusInf).includes(false)){
	// 	console.log('Enviado');
	// }else{
	// 	console.log("No Enviado");
	// }

	if(bandera && check == true){
		console.log('Enviado');
		document.querySelector('.alert-danger').style.display = 'none'
	}else{
		console.log("No Enviado");
		document.querySelector('.alert-danger').style.display = 'block'
	}
	

});

