/* 
hallar el mínimo/máximo de los valores
procesados del arreglo
*/

let a = [4, 8, 2, 5, 10, 3]
let average = getAverage(a)

console.log(getMinValue(a))
console.log(getAverage(a))

function getAverage(a) {
    let sum = 0
    for (let i = 0; i < a.length; i++) {
        sum = sum + a[i] // sum += a[i]
    }
    return sum / a.length
}


function getMinValue(a) {
    if (a.length == 0) return -1
    let min = a[0]

    for (let i = 0; i < a.length; i++) {
        if (distanceToAverage(a[i]) < min) {
            min = distanceToAverage(a[i])
            minIndex = i
        }
    }
    return ("El valor de la distancia del promedio es: " + minIndex)
}

function distanceToAverage(n) {
    return Math.abs(n - average)
}