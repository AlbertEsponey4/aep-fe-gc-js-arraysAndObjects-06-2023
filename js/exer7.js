let array = [1, 2, 3, 4, 7, 23, 55, 623, 22, 3, 5, 2]

const dividirEnParImpar = (array) => {
    let arrayPar = [];
    let arrayImpar = [];

    for(let i=0; i < array.length; i++){
        if (array[i] % 2 == 0){
            arrayPar.push(array[i]);
        }else{
            arrayImpar.push(array[i]);
        }
    }
    return(arrayImpar.concat(arrayPar));    //concat junto los dos arryas
}

const mayoresDe5 = (array) => {
    for(let i=0; i < array.length; i++){
        if (array[i] > 5){
            console.log(array[i]);
        }
    }
}

mayoresDe5(dividirEnParImpar(array)); //7, 23, 55, 623, 22 respuetsa esperada