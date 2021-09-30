var quantidadePeca = window.prompt("Qual a quantidade de peças?")
for(let contador = 0; contador != quantidadePeca; contador ++ ) {
    if (contador == 0 ) {
        console.log("Essa peça é igual a zero")  
    }else if (contador % 2 == 0 ){
        console.log(contador + " Essa peça é 'par', está classificada! ")
    }else{
        console.log(contador + " Essa peça é 'impar' não pode ser classificada! ")
    }
}
