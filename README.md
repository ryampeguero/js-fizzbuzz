# FIZZBUZZ
## Descrizione
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

## Svolgimento HTML
1. Creare un div con la classe container
    - [ ] Creare un div con la classe row
        - [ ] Inseriremo dinamicamente dei div con la classe box qui con js.

## Svolgimento Javascript
1. Inizializzazione variabili:
    - [ ] Dichiarare una variabile 'rowElem' di tipo oggetto che conterrà l'indirizzo della nostra row nel DOM.
    - [ ] Creare variabile 'boxElem' di tipo oggetto che sarà il nostro nodo dove inseriremo i nostri div
    - [ ] Creare una variabile 'boxType' di tipo stringa che conterrà il nome della classe fizz, buzz o fizzbuzz

2. Esecuzione logica:
    - [ ] Creare un ciclo for che vada 1 a 100 in cui inseriremo i prossimi passaggi.

    - [ ] Controllare se la variabile del ciclo for è divisibile per 3 e resto 0 && per 5 e resto 0, con l'utilizzo del modulo
        - All'interno: settare boxType uguale a fizzbuzz 

    - [ ] Altrimenti controllare che sia divisibile per 3 e resto 0,
        - All'interno: settare boxType uguale a fizz

    - [ ] Altrimenti controllare che sia divisibile per 5 e resto 0
        - All'interno: settare boxType uguale a buzz

3. OUTPUT:
    - [ ] Sempre all'interno del ciclo for
    - [ ] Appendiamo all'interno della nostra i nostri div dinamicamente, utilizzando rowElem.append(boxElem)
    **BONUS**
    Cambiare gli stili ai box in base a seconda del valore
 