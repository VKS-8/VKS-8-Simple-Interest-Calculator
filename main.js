let log = console.log;

const getForm = document.querySelector('#form');
    log('GETform ' + getForm);
let result = document.querySelector('#result');
    log('GETresult ' + result);
let updatedPrincipal = '';
let updatedRate = '';
let updatedYear = '';

// When outside the main(), it will display the result but with interest
// undefined.
// When inside the main(), it console logs correct interest value but
// won't display the result text
// getForm.addEventListener('submit', onSubmit);
//     log('Add event listener to form onSubmit()');

let principal = document.querySelector('#principal');
principal.addEventListener('input', ()=>{
    log('principal event entry: ' + principal.value);
  updatedPrincipal = principal.value;
    log('updatedPrincipal: ' + updatedPrincipal);
})

let rate_val = document.querySelector('#rate_val');
rate_val.addEventListener('input', ()=>{
    log('rate event entry: ' + rate_val.value);
  updatedRate = rate_val.value;
    log('updatedRate: ' + updatedRate);
})
  
let years = document.querySelector('#years');
  log(years);
  years.addEventListener('input', ()=>{
    log('years event entry: ' + years.value);
  updatedYear = years.value;
    log('updatedYear: ' + updatedYear);
})

let interest = document.querySelector('#interest').valueAsNumber;

function main() {
        log('main() entry');
    getForm.addEventListener('submit', onSubmit);
      log('Add event listener to form onSubmit()');
    calcInterest();
      log('main() calcInterest');
    onSubmit();
        log('main() onSubmit()');
  
}

// Computes the interest
function calcInterest(updatedPrincipal, updatedRate, updatedYear) {
    log('calcInterest() entry')   
    log(`calcInterest(): principal: ${updatedPrincipal}, rate: ${updatedRate}, years: ${updatedYear}`)
  interest = updatedPrincipal * updatedYear * updatedRate /100;
    log('calcInterest ' + interest);
}

// Gets new value from the range slider and updates the number in the #rate_val span,
// underscore in front of _rate_val because it isn't read
function updateRate(_rate_val) {
    log('updateRate() entry');
  let rateVal = document.getElementById('rate').value;
    log('rateVal ' + rateVal);
  document.getElementById('rate_val').innerHTML = `${rateVal}%`;
    log('rate_val.innerHTML');
}

function onSubmit(principal) {
    log("onSubmit entry ");

  // Should produce a popup window but currently isn't doing this
  if (principal === '') {
        log('checks if principal is empty');
  // used to prevent submission of form if input is blank
     preventDefault();
        log("onSubmit() preventDefault");
    alert("Please enter an amount.");
        log('alert text');
  } else {
    result.innerHTML = resultStr();
      log('result.innerHTML')
    setTimeout(() => result.innerHTML = '', 5000);
      log('setTimeout');
  }
}

function resultStr(principal, rate_val, years, interest) {
      log("RSprincipal " + principal);
      log("RSinterest rate " + rate_val);
      log("RSinterest " + interest);
      log("RSyears " + years);
  return(
      `If you deposit $<span class="resultStr"><mark>${principal}</mark></span> \<br\>
      at an interest rate of <span class="resultStr"><mark>${rate_val}%</mark></span>, \<br\>
      you will receive an amount of $<span class="resultStr"><mark>${interest}</mark></span> \<br\>
      in the year <span class="resultStr"><mark>${years}</mark></span>. \<b\>`
      );
       
}

main();
// getPrincipal.addEventListener('blur', check);


// const getMessage = document.querySelector('.msg');






//     document.querySelector('result').innerHTML= resultStr;
   
//     // Listens for the 'computer interest' button to be clicked then runs the compute function
//     }


//     principal.addEventListener('change', checkCompletion, false);
//     rate_val.addEventListener('change', checkCompletion, false);
//     principal.addEventListener('change', checkCompletion, false);
//     principal.addEventListener('change', checkCompletion, false);
// }


// let year = new Date().getFullYear()+parseInt(years);
