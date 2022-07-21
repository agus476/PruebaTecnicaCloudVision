/*Ejercicio 2
En el lenguaje que prefiera, escriba un procedimiento que reciba un vector de enteros de largo 
variable como parámetro y lo ordene de mayor a menor.*/



let vec = [1,12,15,10,6,4,8,2,7]
console.log(vec)

function ordenarArray (arr){


        for (let i = 1; i < arr.length; i++){

                
         for(let k = 0; k < (arr.length - i); k++){

          if (arr[k] > arr[k + 1]){

           let a = arr[k]

           arr[k] = arr[k+1]

           arr[k+1] = a;



          }



         }

           

            
              
 
        }

    
        console.log(arr)



   




}





ordenarArray(vec)



