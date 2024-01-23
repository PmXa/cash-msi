/* ----------------------------------------
Shopping in debit vs credit card comparison
                             PmXa. Jan 2024
---------------------------------------- */

/* ----------------
  Data section 📄
---------------- */

const ti = 12;    // Tasa de rendimiento anualizada en %
// const form_tp = document.getElementById('form-vp').value;    // Tasa de cashback en %
// const form_vp = document.getElementById('form-vp').value;  // Valor de cada punto en efectivo

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
  console.log(`${'Mes'.padEnd(6)} \t ${'Ganancia'.padStart(8)} ${'Acumulado'.padStart(13)}`)
  console.log("-".repeat(pad))

  for (let j = 1; j <= n; j++) {
    capital -= c/n
    yields[j] = (ti / 100 / 12) * capital
    totalYield += yields[j]
    capital += yields[j]

    console.log(`${("Mes " + j).padEnd(6)} \t ${('$' + yields[j].toFixed(2)).padStart(8)} ${('$' + capital.toFixed(2)).padStart(13)}`)
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
  var form_c = document.getElementById('form-c').value;
  var form_n = document.getElementById('form-n').value;
  var form_ti = document.getElementById('form-ti').value;
  var form_tp = document.getElementById('form-tp').value;
  var form_vp = document.getElementById('form-vp').value;

  // Mostrar los valores en la consola (puedes asignarlos a variables, realizar operaciones, etc.)
  document.getElementById('log-container').innerHTML = "";

  debitBenefit(form_c, form_tp, form_vp);
  creditBenefit(form_c, form_n, form_ti);
}

/* ---------------
  Entry point ✨
--------------- */

updateValues()