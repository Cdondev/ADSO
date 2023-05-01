/**
 Una emisora con presencia en diferentes ciudades desea conocer el rating de canciones y cantantes más 
escuchados (sonados) en este semestre del año. Por lo tanto, se ha pedido a estudiantes del SENA del 
programa de tecnólogo en análisis y desarrollo de software desarrollar una solución que permita conocer 
la respuesta de 6 personas con relación a sus gustos musicales. Con fines administrativos y realizar una 
rifa entre las personas encuestadas, la emisora desea poder registrar de las personas entrevistadas su 
nombre, número de identificación (cédula), fecha de nacimiento, correo electrónico, ciudad de residencia, 
ciudad de origen. Además, se deberá poder almacenar el artista y título de hasta 3 canciones favoritas en cada una de las personas que se ingrese,
teniendo en cuenta lo anterior, se sugiere que la solución deberá 
mostrar un menú que permite las siguientes opciones: 
a. Agregar una persona con los datos que se listan anteriormente. 
b. Mostrar la información personal de una persona particular por medio de su posición en el vector. 

 */

// Creamos un arreglo vacío para almacenar las personas
let personas = [];

// Función para agregar una persona al arreglo
function agregarPersona() {
  // Solicitamos los datos de la persona mediante prompts y los almacenamos en variables
  let nombre = prompt("Ingrese el nombre de la persona:");
  let identificacion = prompt("Ingrese el número de identificación de la persona:");
  let fechaNacimiento = prompt("Ingrese la fecha de nacimiento de la persona:");
  let correo = prompt("Ingrese el correo electrónico de la persona:");
  let ciudadResidencia = prompt("Ingrese la ciudad de residencia de la persona:");
  let ciudadOrigen = prompt("Ingrese la ciudad de origen de la persona:");
  
  // Creamos un arreglo vacío para almacenar las canciones favoritas de la persona
  let cancionesFavoritas = [];
  
  // Mediante un ciclo for, solicitamos los datos de las canciones favoritas y las almacenamos como objetos en el arreglo cancionesFavoritas
  for (let i = 0; i < 3; i++) {
    let artista = prompt(`Ingrese el nombre del artista de la canción favorita #${i+1}:`);
    let titulo = prompt(`Ingrese el título de la canción favorita #${i+1}:`);
    let cancion = { artista, titulo };
    cancionesFavoritas.push(cancion);
  }
  
  // Creamos un objeto con los datos de la persona y su arreglo de canciones favoritas, y lo agregamos al arreglo personas
  let persona = { nombre, identificacion, fechaNacimiento, correo, ciudadResidencia, ciudadOrigen, cancionesFavoritas };
  personas.push(persona);
}

// Función para mostrar la información de una persona específica
function mostrarPersona() {
    let indice = -1; // Inicializamos el índice en -1 para entrar al bucle al menos una vez
    while (indice < 0 || indice >= personas.length || isNaN(indice)) {
      indice = parseInt(prompt(`Ingrese el índice de la persona a mostrar (entre 0 y ${personas.length - 1}):`));
    }
    let persona = personas[indice];
    alert(`Nombre: ${persona.nombre}`);
    alert(`Identificación: ${persona.identificacion}`);
    alert(`Fecha de nacimiento: ${persona.fechaNacimiento}`);
    alert(`Correo electrónico: ${persona.correo}`);
    alert(`Ciudad de residencia: ${persona.ciudadResidencia}`);
    alert(`Ciudad de origen: ${persona.ciudadOrigen}`);
    alert("Canciones favoritas:");
    persona.cancionesFavoritas.forEach(cancion => {
      alert(`Artista: ${cancion.artista}, Título: ${cancion.titulo}`);
    });
  }
// Ciclo while para mostrar un menú de opciones al usuario y ejecutar las funciones correspondientes
while (true) {
  let opcion = prompt("Seleccione una opción: \n1. Agregar persona \n2. Mostrar información personal de una persona \n3. Salir");
  switch (opcion) {
    case "1":
      agregarPersona();
      break;
    case "2":
      mostrarPersona();
      break;
    case "3":
      alert("Hasta luego!");
      break;
    default:
      alert("Opción inválida");
  }
}


