/**Ejercicio 3
En el lenguaje que prefiera, escriba una función que reciba como parámetro una cadena de caracteres y devuelve verdadero si los paréntesis dentro de la cadena se encuentran balanceados, o falso en caso contrario.

“()asdas ()” retorna true;
“)())” retorna false;
*/

function balaceoPar(caracteres){

    const pila = []

    for (let uno of pila )

    if(uno == '('){

      pila.push(uno)

    }

    if (uno == ')'){

        if(pila.length == 0){

      return false;

        }

        pila.pop();
    }

return pila.length === 0

}


console.log (balaceoPar('()'))






