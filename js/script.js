"use strict"



for (let i = 0; i <= 100; i++) {
    //Inizializzazione Variabili
    const rowElem = document.querySelector(".row"); // object | null
    let boxElem = document.createElement("div"); // object | null
    let boxType = ""; //string

    //Esecuzione logica
    if(i % 3 === 0 && i % 5 === 0 ){
        //FIZZBUZZ
        boxType = "fizzbuzz"
        boxElem.innerHTML = boxType;
        console.log("Questo è: fizzbuzz ", i);
    }else if(i % 3 === 0) {
        //fizz
        boxType = "fizz"
        boxElem.innerHTML = boxType;
        console.log("Questo è: fizz ", i);
    }else if(i % 5 === 0) {
        //BUZZ
        boxType = "buzz"
        boxElem.innerHTML = boxType;
        console.log("Questo è: buzz ", i);
    }else {
        boxType = "normal"
        boxElem.innerHTML = i;
        console.log("Normale: ", i);
    }

    //OUTPUT
    boxElem.classList.add("box");
    boxElem.classList.add(boxType);
    
    console.log("Eccomi");
    rowElem.append(boxElem);
}