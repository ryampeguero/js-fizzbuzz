"use strict"



for (let i = 0; i <= 100; i++) {
    //Inizializzazione Variabili
    const rowElem = document.querySelector(".row"); // object | null
    let boxElem = document.createElement("div"); // object | null
    let boxType = ""; //string
    if(i % 3 === 0 && i % 5 === 0 ){
        //FIZZBUZZ
        boxType = "fizzbuzz"
        console.log("Questo è: fizzbuzz ", i);
    }else if(i % 3 === 0) {
        //fizz
        boxType = "fizz"
        console.log("Questo è: fizz ", i);
    }else if(i % 5 === 0) {
        //BUZZ
        boxType = "buzz"
        console.log("Questo è: buzz ", i);
    }else {
        boxType = "normal"
        console.log("Normale: ", i);
    }
    boxElem.classList.add("box");
    boxElem.classList.add(boxType);
    boxElem.innerHTML = i;
    console.log("Eccomi");
    rowElem.append(boxElem);
}