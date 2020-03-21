// Recorrer con un for los atributos de un objeto. Los índices o alias son el nombre del atributo y el value es el valor //

const auto = {
    marca: 'Ford',
    modelo: 'Focus',
    año: 1992
}

for (let a in auto) {
    console.log(`${a}: ${auto[a]}`)
}

// Ordenar un array //

numeros = [4, 2, 6, 89, 21, 1]

console.log(numeros.sort(function(a, b){
    return a - b
}))

// Ordenar un array de objetos basado en un criterio //

let objetos = [
    {id : 5, tamaño : 100},
    {id : 2, tamaño : 500},
    {id : 10, tamaño : 900}
];

// por id
console.log(objetos.sort(function(o1, o2){
    return o1.id - o2.id
}))

// por tamaño
console.log(objetos.sort(function(o1, o2){
    return o1.tamaño - o2.tamaño
}))