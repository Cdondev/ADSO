// definimos el tamoño del vector 
const tamanioVec = 5;
// funcion para almacenar datos en el vector
function leerVector() {
  const vector = [];
  let ultimoNumero = -Infinity;
// solicitamos al ususario el ingreso de los numeros 
  for (let i = 0; i < tamanioVec; i++) {
    const numero = parseInt(prompt(`Ingrese el número ${i + 1}`));
//condicion para el ingresp de los numeros
    if (numero <= ultimoNumero) {
      alert("El número ingresado debe ser mayor al anterior");
      i--;
    } else {
      vector.push(numero);
      ultimoNumero = numero;
    }
  }

  return vector;
}
// mezcla de los dos vectores
function mezclarVectores(v1, v2) {
  const mezcla = [];
  let i = 0;
  let j = 0;

  while (i < v1.length && j < v2.length) {
    if (v1[i] < v2[j]) {
      mezcla.push(v1[i]);
      i++;
    } else if (v1[i] > v2[j]) {
      mezcla.push(v2[j]);
      j++;
    } else {
      mezcla.push(v1[i]);
      mezcla.push(v2[j]);
      i++;
      j++;
    }
  }

  while (i < v1.length) {
    mezcla.push(v1[i]);
    i++;
  }

  while (j < v2.length) {
    mezcla.push(v2[j]);
    j++;
  }

  return mezcla;
}
// iniciamos funciones
alert("Bienvenido al ejercicio de vectores");

const vector1 = leerVector();
console.log("Vector 1:", vector1);

const vector2 = leerVector();
console.log("Vector 2:", vector2);

const mezcla = mezclarVectores(vector1,vector2);
alert(`la mezcla de los vectores es: ${mezcla.join("")}`);
