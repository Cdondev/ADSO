/*Desarrollar un programa que permita almacenar las edades de un grupo de 10 personas en un vector de 
enteros y luego determine la cantidad de personas que son menores de edad, mayores de edad, cuántos 
adultos mayores, la edad más baja, la edad más alta y el promedio de edades ingresadas. Para el ejercicio 
anterior suponga que un adulto mayor debe tener una edad igual o superior a 60. Debe validar para cada 
ingreso que los valores estén en un rango entre 1 y 120 años. En caso de error deberá notificar y solicitar 
un nuevo valor. */


const tamanioVector = 10;

// Crear el vector de edades vacío
const edades = new Array(tamanioVector);

// Inicializar variables para contar la cantidad de personas en cada grupo
let menoresEdad = 0;
let mayoresEdad = 0;
let adultosMayores = 0;

// Inicializar variables para almacenar la edad más baja y la edad más alta
let edadMinima = 120;
let edadMaxima = 0;

// Inicializar variable para almacenar la suma de todas las edades
let sumaEdades = 0;

// Pedir al usuario que ingrese las edades y validar que estén en el rango correcto
for (let i = 0; i < tamanioVector; i++) {
  let edad;
  do {
    // Solicitar al usuario que ingrese la edad
    edad = parseInt(prompt(`Ingrese la edad de la persona ${i + 1}:`));

    // Validar que la edad esté en el rango correcto
    if (isNaN(edad) || edad < 1 || edad > 120) {
      alert("La edad debe estar entre 1 y 120 años. Intente nuevamente.");
    } else {
      // Actualizar las variables de conteo y de edad mínima y máxima
      if (edad < 18) {
        menoresEdad++;
      } else {
        mayoresEdad++;
        if (edad >= 60) {
          adultosMayores++;
        }
      }
      if (edad < edadMinima) {
        edadMinima = edad;
      }
      if (edad > edadMaxima) {
        edadMaxima = edad;
      }
      sumaEdades += edad;

      // Almacenar la edad en el vector
      edades[i] = edad;
    }
  } while (isNaN(edad) || edad < 1 || edad > 120);
}

// Validar que se hayan ingresado al menos 1 edad válida
if (mayoresEdad === 0) {
  alert("Debe ingresar al menos una edad válida para realizar los cálculos.");
} else {
  // Calcular el promedio de edades
  const promedioEdades = sumaEdades / tamanioVector;

  // Imprimir los resultados
  alert(`Cantidad de personas menores de edad: ${menoresEdad}`);
  alert(`Cantidad de personas mayores de edad: ${mayoresEdad}`);
  alert(`Cantidad de adultos mayores: ${adultosMayores}`);
  alert(`Edad más baja: ${edadMinima}`);
  alert(`Edad más alta: ${edadMaxima}`);
  alert(`Promedio de edades: ${promedioEdades}`);
}
