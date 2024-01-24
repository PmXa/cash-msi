/* ----------------------------------------
Shopping in debit vs credit card comparison
                             PmXa. Jan 2024
---------------------------------------- */

/* --------------
  Functions 👀  
-------------- */

// Override console.log to append messages to the log-container div */

(function () {
  var oldLog = console.log;
  var logContainer = document.getElementById('log-container');

  console.log = function () {
      for (var i = 0; i < arguments.length; i++) {
          var log = arguments[i];
          var logEntry = document.createElement('div');
          logEntry.textContent = log;
          logContainer.appendChild(logEntry);
      }

      // Optionally, you can still log to the original console
      oldLog.apply(console, arguments);
  };
})();


function showHelp(field){
  var help = {
    '💲':"Es el total de la compra que quieras hacer en dinero real.",
    '📆':"Es el número de meses al que quieres diferir la compra. La mayoría de veces puede ser un valor de entre 3, 6, 9, 12, 18, 24 y 36 meses.",
    '🤔':"Es la tasa nominal anualizada de donde quieras invertir tu dinero.",
    '🧐':"Es el porcentaje de puntos que te devuelve tu institución con cada compra.",
    '🤨':"Es el valor de cada punto en dinero real. Por ejemplo, si cada punto vale un peso, entonces aquí pondrías 1.00."
  };

  document.getElementById('overlay').style.display = 'block';
  document.getElementById('help-popup').style.display = 'block';
  document.getElementById('popup-content').innerHTML = help[field];
}


function closePopup() {
  // Hide the popup container and overlay
  document.getElementById('help-popup').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}


function debitBenefit(c, tp, vp){
  /* This function gives the cash value of a purchase in debit.
  It depends on the cash back rate tp and the equivalence vp of
  each point in actual money. */

  let header = `Compra de $${c} al contado`
  let benefit = Math.floor(c*tp/100) * vp
  let pad = 31
  let glovePad = Math.floor( (pad -10)/2 );

  // Result
  console.log("~".repeat(pad))
  console.log(header)
  console.log(`Ganancia total = $${benefit.toFixed(2)}`)
  console.log("~".repeat(pad) + '\n'.repeat(2))
  console.log(" ".repeat(glovePad) + "💵🤜 🤛💳")
  console.log("\n".repeat(1))

  return benefit.toFixed(2)
}


function creditBenefit(c, n, ti) {
  /* This is the more complicated function for a credit purchase
  while investing the money. It returns an array with the 
  yields for every month 1-n, while the value at index 0 is the 
  total yield of the investment. */

  let capital = c
  let pad = 31
  let totalYield = 0
  let yields = new Array(n+1)

  // Table header

  let header1 = `Compra de $${c} a ${n} MSI`
  let header2 = `con ${ti}% de rendimiento`

  let header1Pad = Math.floor( (pad - header1.length)/2 )
  let header2Pad = Math.floor( (pad - header2.length)/2 )

  console.log("-".repeat(pad))
  console.log(" ".repeat(header1Pad) + header1)
  console.log(" ".repeat(header2Pad) + header2)
  console.log("-".repeat(pad))
  console.log(`${'Mes'.padEnd(6)} \t ${'Ganancia'.padStart(7)} ${'Acumulado'.padStart(13)}`)
  console.log("-".repeat(pad))

  for (let j = 1; j <= n; j++) {
    capital -= c/n
    yields[j] = (ti / 100 / 12) * capital
    totalYield += yields[j]
    capital += yields[j]

    console.log(`${("Mes " + j).padEnd(6)} \t ${('$' + yields[j].toFixed(2)).padStart(7)} ${('$' + capital.toFixed(2)).padStart(14)}`)
  }

  yields[0] = totalYield.toFixed(2)

  // Table footer
  console.log("-".repeat(pad))
  console.log(`Ganancia total = $${totalYield.toFixed(2)}`)
  console.log("-".repeat(pad))

  return yields
}


function updateValues() {
  // Get updated values from the html form
  var form_c = document.getElementById('form-c').value.replace(/[^0-9.e]/g, '');
  var form_n = document.getElementById('form-n').value;
  var form_ti = document.getElementById('form-ti').value;
  var form_tp = document.getElementById('form-tp').value;
  var form_vp = document.getElementById('form-vp').value.replace(/[^0-9.e]/g, '');

  // Clear the console to see only the newest values
  document.getElementById('log-container').innerHTML = "";

  debitBenefit(form_c, form_tp, form_vp);
  creditBenefit(form_c, form_n, form_ti);
  
  farewellPad = Math.floor((31-19)/2);
  console.log ("\n" + " ".repeat(farewellPad) + "¡Tenga un buen día!")
  
  finalPad = Math.floor((31-6)/2);
  console.log (" ".repeat(finalPad) + "~PmXa~")
}

/* ---------------
  Entry point ✨
--------------- */

// Initial run, so that the page is not empty
updateValues()

// Get reference to the input element
var inputElement = document.getElementById('form-n');

// Add a click event listener to the common parent of the buttons
document.addEventListener('click', function(event) {
    // Check if the clicked element has the class 'info-button'
    if (event.target.classList.contains('info-button')) {
        // Access the span element within the clicked button
        var spanContent = event.target.querySelector('.info-emoji').textContent;

        // Use the span content as needed
        showHelp(spanContent);
    }
});