

function mejoresPresupuestos(proyectosOfrecidos, presupuestosOfrecidos){
    var arrPresupuestos = [];
    var arrayIndices = [];
    var arrayValores = [];
    total = 0;

    if (contieneNumeros(proyectosOfrecidos, n)){
        proyectosOfrecidos.forEach(element => { //Por cada elemento en pRoyectosOfrecidos
            {
                arrayIndices = cogerIndices(proyectosOfrecidos, element);
                arrayValores = cogerValores(arrayIndices, element);

                arrayIndices.forEach(indice => { //Por cada elemento de indices. ESTO SE QUITARIA SI FUNCIONA LO DE COGERVALORES [10, 30]
                     valueOf(arrayIndices[indice]) = presupuestosOfrecidos[indice];
                    console.log(arrayIndices)
                    
                });
                arrPresupuestos[indice] = Math.min.apply(Math, array); //Meto el minimo valor de los presupuestos ofrecidos.
            }
        });
        return arrPresupuestos;
    }
    else
        return -1;   

}


function contieneNumeros(arr, n){
    let cont = 1;
    for (let i=0; i<5; i++){
        if (arr.includes(i))
            cont++;
            console.log(cont)
    }
    if (cont==n) return true;
    else return false;
}

function cogerIndices(arr, val) {
    var indexes = [];
    for(let i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    console.log(indexes);
    
    return indexes;
}

function cogerValores(arr, indice){
    var valores = [];
    for(let i = 0; i < arr.length; i++)
        if (valueOf(arr[i]) === indice)
            valores.push(i);
    console.log(valores)
}




var n=5;
var proyectosOfrecidos = [2, 3, 4, 2, 4, 5, 1];
var presupuestosOfrecidos= [10, 40, 20, 30, 10, 50, 70];


console.log(proyectosOfrecidos)
console.log(presupuestosOfrecidos)
console.log(mejoresPresupuestos(proyectosOfrecidos, presupuestosOfrecidos));