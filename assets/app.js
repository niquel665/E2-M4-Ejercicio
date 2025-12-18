//Código Antiguo (para refactorizar):

// Objeto que representa a un usuario
// var usuario = {
//   nombre: 'Ana',
//   edad: 24,
//   ciudad: 'Barcelona'
// };

const usuario = {
  nombre: "Ana",
  edad: 24,
  ciudad: "Barcelona",
};


// // Función tradicional para crear el mensaje de presentación
// function crearMensajePresentacion(user) {
//   var nombre = user.nombre;
//   var edad = user.edad;
//   var ciudad = user.ciudad;

//   var mensaje = 'Hola, mi nombre es ' + nombre + ', tengo ' + edad + ' años y vivo en la ciudad de ' + ciudad + '.';
  
//   return mensaje;
// }

// Arrow function + destructuring en parámetros + template literals
const crearMensajePresentacion = ({ nombre, edad, ciudad }) =>
  `Hola, mi nombre es ${nombre}, tengo ${edad} años y vivo en la ciudad de ${ciudad}.`;


// // Se llama a la función y se muestra el resultado en consola
// var mensajeDeBienvenida = crearMensajePresentacion(usuario);
// console.log(mensajeDeBienvenida);


const mensajeDeBienvenida = crearMensajePresentacion(usuario);
console.log(mensajeDeBienvenida);

