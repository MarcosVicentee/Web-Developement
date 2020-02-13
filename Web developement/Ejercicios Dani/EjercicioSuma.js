
function llenarNumeros() {
    const max = 1000;
	var arraynum= new Array(max);
 
	if(max>0){
 
		for(let i=1 ; i<max ; i++){
 
	     var numaleatorio=Math.floor(Math.random() * (arraynum.length+1));
 
		 arraynum[i]=numaleatorio;
		
 
        }
    console.log(arraynum)
    return arraynum;    
	}
 
}


 function sumArr(arr){
    let res = 0;
    for (let i=0; i<arr.length; i++){
        res += arr[i];
    }
    
    return res

} 

function sumArrV2(arr){
    if(arr.length == 0) return 0;
    
    return arr.shift() + sumArrV2(arr);

}

function sumArrV3(arr){
    if( !arr[1]) return arr[0];
        
    return arr.shift() + sumArrV2(arr);
    
    }







var arr = llenarNumeros();

console.log(arr)



var t0 = performance.now();
console.log(sumArr(arr));
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");


var t2 = performance.now();
console.log(sumArrV2(arr));
var t3 = performance.now();
console.log("Call to doSomething took " + (t3 - t2) + " milliseconds.");



var t4 = performance.now();
console.log(sumArrV3(arr));
var t5 = performance.now();
console.log("Call to doSomething took " + (t5 - t4) + " milliseconds.");


