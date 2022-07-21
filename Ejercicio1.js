/*Ejercicio 1
En el lenguaje que prefiera, escriba una función que dado dos vectores de enteros ordenados de entrada genere otro diferente de salida (ordenado también) con los elementos de ambos vectores entrantes (no se puede usar el método “sort”)*/




const vec1 = [1,5,7,8,10]
const vec2 = [2,13,15,16]


function ordernarValores(arr1 , arr2){

let vecNoOrdenado = arr1.concat(arr2);

console.log(vecNoOrdenado)
for (let i = 1; i < vecNoOrdenado.length; i++){


        for(let x = 0; x < (vecNoOrdenado.length - i); x++){

            if (vecNoOrdenado[x] > vecNoOrdenado[x + 1]){
  
             let a = vecNoOrdenado[x]
  
             vecNoOrdenado[x] = vecNoOrdenado[x+1]
  
             vecNoOrdenado[x+1] = a;
  
            }

        }

}


console.log(vecNoOrdenado)


}



console.log( ordernarValores(vec1, vec2))

