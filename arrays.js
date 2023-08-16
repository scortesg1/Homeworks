const originalArray = [1, 2, 3, 4, 5];
let currentArray = [...originalArray];

function displayArray() {
  console.log("Array actual:", currentArray);
}

function resetArray() {
  currentArray = [...originalArray];
  console.log("Array reiniciado:", currentArray);
}

function runMethod(methodName, description, example) {
  console.log(`\nUsando el método ${methodName}:`);
  console.log("Descripción:", description);
  console.log("Ejemplo inicial:", currentArray);
  example();
  console.log("Ejemplo final:", currentArray);
}

const methods = [
  {
    name: "push",
    description: "Agrega un elemento al final del arreglo. En este caso agrega un 6",
    example: () => currentArray.push(6),
  },
  {
    name: "pop",
    description: "Elimina el último elemento del arreglo.",
    example: () => currentArray.pop(),
  },
  {
    name: "shift",
    description: "Elimina el primer elemento del arreglo.",
    example: () => currentArray.shift(),
  },
  {
    name: "unshift",
    description: "Agrega un elemento al principio del arreglo. En este caso agrega un 0 al inicio",
    example: () => currentArray.unshift(0),
  },
  {
    name: "splice",
    description: "Elimina o reemplaza elementos en el arreglo en una posición especificada. En este caso reemplaza el elemento 2 por el 7s",
    example: () => currentArray.splice(2, 1, 7),
  },
  {
    name: "concat",
    description: "Combina el arreglo actual con otro arreglo o elementos. En este caso añade 8 y 9 al original",
    example: () => (currentArray = currentArray.concat([8, 9])),
  },
  {
    name: "slice",
    description: "Crea un nuevo arreglo a partir de una porción del arreglo actual. En este caso extrae de las posiciones 1 a la 4 del array original",
    example: () => (currentArray = currentArray.slice(1, 4)),
  },
  {
    name: "reverse",
    description: "Invierte el orden de los elementos en el arreglo.",
    example: () => currentArray.reverse(),
  },
  {
    name: "sort",
    description: "Ordena los elementos del arreglo alfabéticamente o numéricamente.",
    example: () => currentArray.sort(),
  },
  {
    name: "map",
    description: "Crea un nuevo arreglo aplicando una función a cada elemento del arreglo actual. En este caso multiplica cada numero por 2",
    example: () => (currentArray = currentArray.map((num) => num * 2)),
  },
  {
    name: "filter",
    description: "Crea un nuevo arreglo con elementos que cumplan con cierta condición. En este caso filtra los numeros pares",
    example: () => (currentArray = currentArray.filter((num) => num % 2 === 0)),
  },
];

function showMenu() {
  console.log("Métodos de Array disponibles:");
  methods.forEach((method, index) => {
    console.log(`${index + 1}. ${method.name}`);
  });
  console.log(`${methods.length + 1}. Reiniciar Array`);
  console.log(`${methods.length + 2}. Salir`);
}

function main() {
  console.log("Bienvenido al simulador de métodos de Array!");

  while (true) {
    showMenu();
    const choice = parseInt(prompt("Seleccione un método:"));

    if (choice >= 1 && choice <= methods.length) {
      const selectedMethod = methods[choice - 1];
      runMethod(selectedMethod.name, selectedMethod.description, selectedMethod.example);
    } else if (choice === methods.length + 1) {
      resetArray();
    } else if (choice === methods.length + 2) {
      console.log("¡Hasta luego!");
      break;
    } else {
      console.log("Opción inválida. Por favor, seleccione una opción válida.");
    }
  }
}

main();
