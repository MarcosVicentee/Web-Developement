

function mejoresPresupuestos(proyectosOfrecidos, presupuestosOfrecidos){
    var arrPresupuestos = [];
    var arrayIndices = [];
    
    total = 0;

    if (contieneNumeros(proyectosOfrecidos, n)){
        proyectosOfrecidos.forEach(element => { //Por cada elemento en ProyectosOfrecidos
            var arrayValores = [];
            arrayIndices = cogerIndices(proyectosOfrecidos, element);
            console.log("ArrayIndices [ " + arrayIndices + " ]")
            


            arrayIndices.forEach(valor => { //Por cada elemento de indices.
                arrayValores.push(presupuestosOfrecidos[valor])  //Metemos en el arrayValores los elementos de presupuestosOfrecidos en las posiciones del arrayIndice

            });


            console.log("Array Valores [ " + arrayValores + " ]")
            arrPresupuestos.push(Math.min.apply(Math, arrayValores)); //Meto el minimo valor de los presupuestos ofrecidos.
            console.log("Array Presupuestos [ " + arrPresupuestos + " ]")
        

            //LO SIGUIENTE ES QUE NO EVELUE EL PROYECTO 2 VECES SI YA SE HA EVALUADO => ARRAY DE PROYECTOS EVALUADOS O METODO QUE DEVOLVIA EL PRIMER ELEMENTO QUE COINDIDIA CON EL VALOR O ALGO ASI  
            
        });
        return arrPresupuestos;
    }
    else
        return -1;   
}


function contieneNumeros(arr, n){
    var unique = arr.filter((value, index, arr) => arr.indexOf(value) === index); //https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
    
    if (unique.length == n) return true;
    else return false;
}


function cogerIndices(arr, val) {   // Usar map()
    var indexes = [];
    for(let i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    
    return indexes;
}





var n=5;
var proyectosOfrecidos = [2, 3, 4, 2, 4, 5, 1];
var presupuestosOfrecidos= [10, 40, 20, 30, 10, 50, 70];


console.log(proyectosOfrecidos)
console.log(presupuestosOfrecidos)
console.log(mejoresPresupuestos(proyectosOfrecidos, presupuestosOfrecidos));