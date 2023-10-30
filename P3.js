let libro = [568, 568, 568, 568]
let disco = [45, 45, 45]
let tocadisco = [678]

let sumalibro = 0
let sumadisco = 0

for (let i = 0; i < libro.length; i++) {
    sumalibro = sumalibro + libro[i] * 0.2
    if (i < disco.length) {
        sumadisco = sumadisco + disco[i] * 0.15
    }

}
console.log("Total libro ", sumalibro);
console.log("Total disco ", sumadisco);

let suma = sumalibro + sumadisco +( tocadisco*0.02)

console.log("Total a pagar", suma);