// settings //
var nomeUtente = prompt('Il tuo nome?');
var cognomeUtente = prompt('Il tuo cognome?');
var colorePreferito = prompt('Il tuo colore preferito?');
var numeroPreferito = prompt('Il tuo numero preferito?')
var laTuaPassword = nomeUtente + cognomeUtente + colorePreferito + numeroPreferito;

// results console.log //
console.log('Il tuo nome: ' + nomeUtente);
console.log('Il tuo cognome: ' + cognomeUtente);
console.log('Il tuo colore preferito: ' + colorePreferito);
console.log('Il tuo numero preferito: ' + numeroPreferito);
console.log('La tua password: ' + laTuaPassword);

// print on html //
document.getElementById('nome-utente').innerHTML = nomeUtente;
document.getElementById('cognome-utente').innerHTML = cognomeUtente;
document.getElementById('colore-utente').innerHTML = colorePreferito;
document.getElementById('password-utente').innerHTML = colorePreferito;
document.getElementById('password-utente').innerHTML = laTuaPassword;
