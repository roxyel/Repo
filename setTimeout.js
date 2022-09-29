//arreglo para llenar una funcion con numeros aleatorios, esa funcion pasarla a un settimeout que dure 3 segundos, mientras rtanscurren los 3 segundos llenar un vector de unos a traves de una funcion, el arreglo debe tener entre 5 y 25 numeros//

/*var numero= 12;
var aelementos=[];
for (let rango = 0; rango < 20; rango++) {
    aelementos[rango] = Math.round(Math.random()*100);
}
console.log(aelementos);

setTimeout(function(){
    console.log("función settimeout");
}, 3000);

console.log("vector");

var vec=[];
//var vec2=new Array();
console.log(vec);
vec[0]=25;
console.log(vec);
vec.push([1,2,3]);
console.log(vec);

var vector=[];
for (let i = 0; i < 20 ; i++) {
    vector[i]=Math.round((Math.random())*20);
}
console.log(vector)
//Recorrer el arreglo
for (let i = 0; i < vector.length; i++) {
    console.log(vector[i]*vector[i])
}*/

x=Math.round(Math.random() * (25-5) + 0.5);

function numerosAleatorios(limite) {
    var numeros = [];
    for (let i = 0; i < limite; i++) {
        numeros[i]=Math.round(Math.random() * (100 - 20) +20);
    }
    console.log(numeros)
}

function numerosUno(limite) {
    var numeros1=[]
    for (let i = 0; i < limite; i++) {
        numeros1[i]= 1
    }
    console.log(numeros1)
}

setTimeout( numerosAleatorios, 3000, x)
numerosUno(x)

//timeciclos

for (let j = 0; j < 10; j++) {
    setTimeout(() => {
        console.log(j)
    }, (1000*j));
}
setInternal(() => {
    console.log('Amo el SENA');
}, 1000);

//repetir el intervalo de 2 segundos
let timerId = setInterval(() => console.log('tick'), 2000);

//despues de 5 segundos parar
setTimeout(() => {
    clearInterval(timerId);
    // console.log('stop');
}, 5000);

//Arreglo aleatorio 15 elementos, se imprma infinitamente
//SOLUCION (HECHA POR EL PROFE)

var vec=[];
for  (let i = 0; i < 10; i++) {
    vec[i]=Math.round(Math.random()*100);
}

var k=0;
setInterval (() => {
    console.log(vec[k])
    k++;
    k==10?k=0:k=k
}, (1000));

//prueba callback

function pruebaCallback(callback, name){
    setTimeout(() => {
        console.log('Dentro de pruebaCallback')
    }, 2000);
    callback(name);
}
function saludo(nombre){
    console.log(`Hola ${nombre}`)
}
pruebaCallback(saludo, 'Ana');

//modificacion del ejercicio de arriba
function pruebaCallback(callback1, callback2, name){
    callback1(name);
    setTimeout(() => {
        console.log("Dentro de pruebaCallback")
    }, 2000);
    callback2(name);
}

function saludos(nombre) {
    console.log(`Hola ${nombre}`);
}

function cuentaLetras(nombre) {
    console.log(nombre.length);
}
pruebaCallback(saludos, cuentaLetras, 'Ana');

