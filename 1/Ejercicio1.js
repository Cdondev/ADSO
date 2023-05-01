/*Desarrollar un programa que permita calcular el área o perímetro de algunas figuras planas según la 
siguiente tabla:*/


// solicitamos al usuario que seleccione la operacion la figura que desea calcular el area y perimetro
let opcion = prompt('Seleccione la figura a calcular:\n1. Cuadrado\n2. Rectángulo\n3. Triángulo\n4. Círculo');
// pasamos la seleecion del usuario a la variable opcion
opcion = parseInt(opcion);
if (opcion === 1) {
// cuadrado  
  alert("Seleccionaste cuadrado");
  let lado = prompt('Ingrese el lado del cuadrado:');
  lado = parseFloat(lado);
  let area = lado * lado;
  let perimetro = lado * 4;
  alert('El área del cuadrado es: ' + area + '\nEl perímetro del cuadrado es: ' + perimetro);
} else if (opcion === 2) {
 // rectangulo
  alert("Seleccionaste rectángulo");
  let base = prompt('Ingrese la base del rectángulo:');
  base = parseFloat(base);
  let altura = prompt('Ingrese la altura del rectángulo:');
  altura = parseFloat(altura);
  let area = base * altura;
  let perimetro = 2 * base + 2 * altura;
  alert('El área del rectángulo es: ' + area + '\nEl perímetro del rectángulo es: ' + perimetro);
} else if (opcion === 3) {
//triangulo
  alert("Seleccionaste triángulo");
  let base = prompt('Ingrese la base del triángulo:');
  base = parseFloat(base);
  let altura = prompt('Ingrese la altura del triángulo:');
  altura = parseFloat(altura);
  let area = base * altura / 2;
  let perimetro = 3 * base;
  alert('El área del triángulo es: ' + area + '\nEl perímetro del triángulo es: ' + perimetro);
} else if (opcion === 4) {
// circulo
  alert("Seleccionaste círculo");
  let radio = prompt('Ingrese el radio del círculo:');
  radio = parseFloat(radio);
  let area = Math.PI * radio * radio;
  let perimetro = 2 * Math.PI * radio;
  alert('El área del círculo es: ' + area + '\nEl perímetro del círculo es: ' + perimetro);
} else {
 //opcion invalida
  alert('Opción inválida');
}
