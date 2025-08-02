//Snacks Per bk rooms:

//Snack 1
//Crea un array composto da 10 automobili.
//Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione 
// (benzina, diesel, gpl, elettrico, metano).

const automobili = [
      { marca: 'Fiat', modello: '500', alimentazione: 'benzina' },
      { marca: 'Volkswagen', modello: 'Passat', alimentazione: 'diesel' },
      { marca: 'Toyota', modello: 'Prius', alimentazione: 'elettrico' },
      { marca: 'Renault', modello: 'Clio', alimentazione: 'gpl' },
      { marca: 'Opel', modello: 'Zafira', alimentazione: 'metano' },
      { marca: 'BMW', modello: 'i3', alimentazione: 'elettrico' },
      { marca: 'Audi', modello: 'A3', alimentazione: 'benzina' },
      { marca: 'Kia', modello: 'Sportage', alimentazione: 'gpl' },
      { marca: 'Mercedes', modello: 'C-Class', alimentazione: 'diesel' },
      { marca: 'Seat', modello: 'Leon', alimentazione: 'metano' }
];

const alimentazioneBenzina = [];
const alimentazioneDiesel = [];
const qualsiasiAlimentazione = [];

for (let i = 0; i < automobili.length; i++) {
      if (automobili[i].alimentazione === 'benzina') {
            alimentazioneBenzina.push(automobili[i]);
      } else if (automobili[i].alimentazione === 'diesel') {
            alimentazioneDiesel.push(automobili[i]);
      } else {
            qualsiasiAlimentazione.push(automobili[i]);
      }
}


//Infine stampa separatamente i 3 array.
console.log(alimentazioneBenzina);
console.log(alimentazioneDiesel);
console.log(qualsiasiAlimentazione);

//Snack 2
//A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

const parole = ['ciao', 'MONDO', 'Javascript', 'PROVA'];
const paroleFormattate = parole.map(parola => {
      const minuscola = parola.toLowerCase();
      const inizialeMaiuscola = minuscola.charAt(0).toUpperCase() + minuscola.slice(1);
      return inizialeMaiuscola;
});

console.log(paroleFormattate);
// Output: [ 'Ciao', 'Mondo', 'Javascript', 'Prova' ]


//Snack 3
//Crea un array di oggetti che rappresentano degli animali.
//Ogni animale ha un nome, una famiglia e una classe.
//Crea un nuovo array con la lista dei mammiferi


//Snack 4
//Crea un array di oggetti che rappresentano delle persone.
//Ogni persona ha un nome, un cognome e un’età.

//Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.