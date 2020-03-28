// dichiaro variabili
var nameValue, kmValue, ageValue, carrozza, codice;

// selezione campi input
var nameG = document.getElementById('name');
var kmG = document.getElementById('km');
var ageG = document.getElementById('age');
var ResetG = document.getElementById('reset');
var ticketBox = document.getElementsByClassName('container-ticket');

console.log(nameG, kmG, ageG)

// selezione bottone genera
var generaBtn = document.getElementById('genera');


// catturo click bottone genera
generaBtn.addEventListener('click',
  function () {
    // salvo gli input immessi all'interno dei campi input
    nameValue = nameG.value;
    kmValue = kmG.value;
    ageValue = ageG.value;

    console.log(nameValue, kmValue, ageValue)

    // calcolo prezzo dei biglietti
    ticketPrice = 0.21 * kmValue;
    if (ageValue === 'young') {
      discount = 20;
      ticketPrice = ticketPrice - (ticketPrice * discount / 100);
    } else if (ageValue === 'senior') {
      discount = 40;
      ticketPrice = ticketPrice - (ticketPrice * discount / 100);
    }

    //stampo nome e prezzo del biglietto solo se gli input sono riempiti e il nome è una stringa

    if (ticketPrice && nameValue) {
      document.getElementById('passenger-name').innerHTML = nameValue;
      document.getElementById('ticket-price').innerHTML = '€ ' + ticketPrice.toFixed(2) + ' Tariffa ' + ageValue;
      ticketBox[0].className = ticketBox[0].classList + ' ticket-active ';
    } else {
      document.getElementById('passenger-name').innerHTML = '';
      document.getElementById('ticket-price').innerHTML = '';
    }
  }
)

ResetG.addEventListener('click',
  function () {
    // svuoto variabili e resetto campi
    nameG.value = '';
    nameValue = '';
    document.getElementById('passenger-name').innerHTML = '';
    kmG.value = '';
    kmValue = '';
    ageG.value = '';
    ageValue = '';
    ticketPrice = '';
    document.getElementById('ticket-price').innerHTML = '';
    ticketBox[0].classList.remove("ticket-active");
  })