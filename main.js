// TODO - add correct alerts per rubric
// TODO - add comments
/* Note about fix - we did move the resultStr back into the compute function where it is assigned, and declared but did not define a global let resultStr variable -- The "we" = my son, who is currently my "rubber duck" that I talk things through with, and who continues to help me with my debugging skills. */

const getForm = document.querySelector('#form'); 
const getMessage = document.querySelector('.msg');
const displayResults = document.querySelector('#result');

let resultStr;

getForm.addEventListener('submit', onSubmit);

function main() {
  updateRate();
  compute();
  onSubmit();
}

function onSubmit(e) {
    e.preventDefault();

    result.innerHTML = resultStr;
    
    setTimeout(() => result.innerHTML = '', 5000);
  
    }

// Computes the interest, changes the value in the 'Interest' output field, 
function compute()
{
    const principal = document.getElementById('principal').value;
    const rate = document.getElementById('rate').value;
    const years = document.getElementById('years').value;
        
    let interest = principal * years * rate /100;
        document.getElementById('interest').innerHTML = '$'+interest.toFixed(2);

    resultStr = 
    `If you deposit $<span class="resultStr"><mark>${principal}</mark></span> \<br\>
    at an interest rate of <span class="resultStr"><mark>${rate}%</mark></span>, \<br\>
    you will receive an amount of $<span class="resultStr"><mark>${interest.toFixed(2)}</mark></span> \<br\>
    in the year <span class="resultStr"><mark>${years}</mark></span>. \<b\>` 
    // TODO-add the year parsed from current year here instead of the number of years chosen in the select drop down
    ;
}

// Gets new value from the range slider and updates the number in the #rate_val span,
// underscore in front of _rate_val because it isn't read
function updateRate(_rate_val) {
    let rateVal = document.getElementById('rate').value; 
    document.getElementById('rate_val').innerHTML= `${rateVal}%`; 
    return rateVal;
}
