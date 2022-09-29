//hacer una receta (cualquiera): funciones con callback, procesos independientes con diferentes tiempos con cada uno.
/*function receta(mezclar, amasar, hornear, sacar, decorar, name){
    mezclar(name);
    setTimeout(() => {
        console.log("Mezclar todos los ingredientes")
    }, 1000);
    amasar(name);
    setTimeout(() => {
        console-log("Amasar y moldear todo")
    }, 1500);
    hornear(name);
    setTimeout(() => {
        console.log("Poner a 180 grados por 1 hora")
    }, 2000);
    sacar(name);
    setTimeout(() => {
        console.log("Dejar enfriar")
    }, 2500);
    decorar(name);
    setTimeout(() => {
        console.log("Decorar el pastel")
    }, 3000);
}
receta(mezclar, amasar, hornear, sacar, decorar);*/

//"correccion del ejercicio"
setTimeout(() => {
    console.log('Mezclar ingredientes')
}, 1000);
setTimeout(() => {
    console.log('Moldear la masa')
}, 2000);
setTimeout(() => {
    console.log('Poner en el horno a 180 grados por una hora')
}, 3000);
setTimeout(() => {
    console.log('Sacar del horno')
}, 4000);
setTimeout(() => {
    console.log('Decorar')
}, 5000);
//(me está quedando bien hasta ahora)