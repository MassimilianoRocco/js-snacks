                        // SNACK 1

const a = prompt("Inserisci una parola");
const b = prompt("Inserisci un'altra parola");

if(a.length>b.length){
    console.log(b);
    console.log(a);
}
else if(a.length == b.length) {
    console.log("Le due parole hanno stessa lunghezza!");
} 
else{
    console.log(a);
    console.log(b);
}

                        // SNACK 2
// let numeroAggiunto = 0;
// let risultato = 0;
// for(let x=0; x<10; x++){
//     numeroAggiunto = prompt("Inserisci un numero:");
//     risultato += parseInt(numeroAggiunto);
// }
// console.log(risultato);

                        // SNACK 3

// for(let x=0; x<1000; x++){
//     let inPotenza = 2;
//     inPotenza = Math.pow(inPotenza, x);
//     console.log(inPotenza);
//     if(inPotenza == 1024){
//         break;
//     }
// }

                        // SNACK 4
// let num = 0;
// const contatore = prompt("Indica di quanti numeri vuoi stampato il cubo");
// for(let x=0; x<=parseInt(contatore); x++){
//     let result  = Math.pow(num, 3)
//     num ++;
//     console.log(result);
// }

                        // SNACK 5

// let numeroDaAnalizzare = prompt("Inserisci un numero di 4 cifre");

// let a = Math.floor((parseInt(numeroDaAnalizzare) / 1) % 10);
// let b = Math.floor((parseInt(numeroDaAnalizzare) / 10) % 10);
// let c = Math.floor((parseInt(numeroDaAnalizzare) / 100) % 10);
// let d = Math.floor((parseInt(numeroDaAnalizzare) / 1000) % 10);
// let risultatoCifre = a + b + c + d;
// console.log(risultatoCifre);


                        // SNACK 6

// let n;
// while(parseInt(n)!= 42){
//     n = prompt("Inserisci un numero");
// }
// console.log("Congratulazioni, hai inserito 42!");