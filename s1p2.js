/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
// let rispostaUno0='I datatype fondamentali di JS sono: number, string, boolean, undefined e null';
// let rispostaUno1='Number: per contenere i numeri';
// let rispostaUno2='String: per contenere frasi';
// let rispostaUno3='Boolean: per rappresentare il vero ed il falso';
// let rispostaUno4='Null per una variabile vuota ed Undefined per una variabile in cui non conosciamo che tipo di dato conterra';
// console.log(rispostaUno0);
// console.log(rispostaUno1);
// console.log(rispostaUno2);
// console.log(rispostaUno3);
// console.log(rispostaUno4);


/* ESERCIZIO 2
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let somma=12+20;
console.log(somma);

/* ESERCIZIO 3
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x=12;
console.log(x);

/* ESERCIZIO 4
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let nome='Mattia';
console.log(nome);

/* ESERCIZIO 5
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let sottrazione;
sottrazione=4-x;
console.log(sottrazione);

/* ESERCIZIO 6
 Crea un oggetto di Javascript che ti rappresenti (come proprietà usa nome, cognome e hobby) 
*/
let profilo={ "nome":'Mattia', "cognome":'Buffello', "hobby":'Sport di montagna'};
console.log(profilo.hobby);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/
let name1='john';
let name2='John';
console.log(name1 !== name2);
console.log((name1.toLowerCase()) === (name2.toLowerCase()));


