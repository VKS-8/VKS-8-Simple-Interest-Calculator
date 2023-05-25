let log = console.log;

const getForm = document.querySelector('#form');
  log('GETform ' + getForm);
let result = document.querySelector('#result');
  log('GETresult ' + result);
  
let updatedPrincipal = '';
  log('SETupdatedPrincipal to empty ' + updatedPrincipal);
let updatedRate = '';
  log('SETupdatedRate to empty ' + updatedRate);
let updatedYear = '';
  log('SETupdatedYear to empty ' + updatedYear);

// When outside the main(), it will display the result but with interest
// undefined.
// When inside the main(), it console logs correct interest value but
// won't display the result text
getForm.addEventListener('submit', onSubmit);
    log('Add event listener to form onSubmit()');

// Get principal from HTML
let principal = document.querySelector('#principal');
  log('get principal from HTML ' + principal);

// Get updated principal value and assign to new variable
function getPrincipal() {
  principal.addEventListener('input', ()=>{
    log('principal event entry: ' + principal.value);
    updatedPrincipal = principal.value;
    return updatedPrincipal;
  })
}

// Get rate_val from HTML
let rate_val = document.querySelector('#rate_val');
log('get rate_val from HTML' + rate_val);

// Get updated rate value and assign to new variable
function getRate() {
  rate_val.addEventListener('input', ()=>{
      log('rate event entry: ' + rate_val.value);
      updatedRate = rate_val.value;
      return updatedRate;
  })
}

// Get years from HTML
let years = document.querySelector('#years');
  log('get years from HTML' + years);

// Get updated years value and assign to new variable
function getYear() {
  years.addEventListener('input', ()=>{
    log('years event entry: ' + years.value);
    updatedYear = years.value;
    return updatedYear;
  })
}

function main() {
      log('main() entry');
    // getForm.addEventListener('submit', onSubmit);
    //   log('Add event listener to form onSubmit()');
    onSubmit();
      log('main() onSubmit()');
    calcInterest();
      log('main() calcInterest()');
    setResult();
      log('main() setResult()')
    
  
}

// Computes the interest
function calcInterest() {
    log('calcInterest() entry') 
  getPrincipal(); 
    log('calcInterest(): getPrincipal complete');
  getRate();
    log('calcRate(): getRate complete');
  getYear();
    log('calcInterest(): getYear complete');
    log(`calcInterest(): principal: ${updatedPrincipal}, rate: ${updatedRate}, years: ${updatedYear}`)
  interest = updatedPrincipal * updatedYear * updatedRate /100;
    log('calcInterest ' + interest);
    return interest;
}

// Gets new value from the range slider and updates the number in the #rate_val span,
// underscore in front of _rate_val because it isn't read
function updateRate(_rate_val) {
    log('updateRate() entry');
  let rateVal = document.getElementById('rate').value;
    log('GETrateVal ' + rateVal);
  document.getElementById('rate_val').innerHTML = `${rateVal}%`;
    log('SETrate_val to ' + rate_val.innerHTML);
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
  } else return;
}

function resultStr() {
  getPrincipal();
  getRate();
  getYear();
  calcInterest();
    log('resultStr() entry');
      log("RSprincipal " + updatedPrincipal);
      log("RSinterest rate " + updatedRate);
      log("RSinterest " + interest);
      log("RSyears " + updatedYear);
  return(
      `If you deposit <span class="resultStr"><mark>$${updatedPrincipal}</mark></span> \<br\>
      at an interest rate of <span class="resultStr"><mark>${updatedRate}%</mark></span>, \<br\>
      you will receive an amount of $<span class="resultStr"><mark>${interest}</mark></span> \<br\>
      in the year <span class="resultStr"><mark>${updatedYear}</mark></span>. \<b\>`
      );
       
}

function setResult() {
  result.innerHTML = resultStr();
  log('result.innerHTML')
setTimeout(() => result.innerHTML = '', 5000);
  log('setTimeout');
}

main();
// getPrincipal.addEventListener('blur', check);

// const getMessage = document.querySelector('.msg');

// let year = new Date().getFullYear()+parseInt(years);
