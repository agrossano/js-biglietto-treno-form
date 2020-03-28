// dichiaro variabili
var nameValue, kmValue, ageValue, pnr;

// selezione campi input
var nameG = document.getElementById('name');
var kmG = document.getElementById('km');
var ageG = document.getElementById('age');
var ResetG = document.getElementById('reset');
var ticketBox = document.getElementsByClassName('container-ticket');
var inputAfter = document.getElementsByClassName('container-input');
var warning = document.getElementById('message');


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

    //stampo nome, prezzo del biglietto  e pnr solo se gli input sono riempiti e il nome è una stringa

    if (ticketPrice && nameValue) {
      document.getElementById('passenger-name').innerHTML = nameValue;
      document.getElementById('ticket-price').innerHTML = '€ ' + ticketPrice.toFixed(2) + ' Tariffa ' + ageValue;
      ticketBox[0].className = ticketBox[0].classList + ' ticket-active ';
      inputAfter[0].className = inputAfter[0].classList + ' --after ';
      document.getElementById('message').innerHTML = '';
      pnr = Math.random().toString().substr(2, 6);
      document.getElementById('passenger-pnr').innerHTML = pnr;
    } else {
      document.getElementById('passenger-name').innerHTML = '';
      document.getElementById('ticket-price').innerHTML = '';
      document.getElementById('message').innerHTML = 'Assicurati di riempire tutti i campi!';
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
    ageValue = '';
    ticketPrice = '';
    document.getElementById('ticket-price').innerHTML = '';
    ticketBox[0].classList.remove("ticket-active");
    inputAfter[0].classList.remove("--after");
    document.getElementById('message').innerHTML = 'Ciao, riempi i campi per generare il tuo biglietto!';
  })