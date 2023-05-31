// TODO - add comments

// Get input values from HTML
const getForm = document.querySelector('#form');
//  console.log('Var getForm: ' + getForm);
const inputField = document.querySelector('input');
//  console.log('Var inputField: ' + inputField);
const submitBtn = document.querySelector('#btn');
//  console.log('Var submitBtn: ' + submitBtn);

let displayResults = document.querySelector('#result');
//  console.log('Var displayResults: ' + displayResults);

// Declare variable to set the results to for display
let resultStr;
//  console.log('Var resultStr: ' + resultStr);


let isValid = true;

setFocusOnPrincipal()

// Submit form event
submitBtn.addEventListener('click', compute);
// console.log(submitBtn);

// Prevent default on form
getForm.addEventListener('input', (e) => {
    e.preventDefault();
})

// Gets new value from the range slider and updates the number in the #rate_val span,
function updateRate() {
    // console.log('update() entry');
    let rateVal = document.getElementById('rate').value; 
    // console.log('Var rateVal: ' + rateVal);
    document.getElementById('rate_val').innerHTML= `${rateVal}%`;
    // console.log(`set innerHTML to ${rateVal}`);
}

// Computes the interest, changes the value in the 'Interest' output field, 
function compute() {   
    
    // console.log(e);
    const principal = document.getElementById('principal').value;
    // console.log('Var principal: ' + principal);
    const rate = document.getElementById('rate').value;
    // console.log('Var rate: ' + rate);
    const years = document.getElementById('years').value;
    // console.log('Var years: ' + years);

    validation(principal);     
    console.log('validation() ran');

    if (!isValid) {
      setFocusOnPrincipal();
        return;
    }
    
    let interest = principal * years * rate /100;
        document.getElementById('interest').innerHTML = '$'+interest.toFixed(2);
        // console.log('Var interest: ' + interest);
    let year = new Date().getFullYear() + parseInt(years);
        // console.log('Var year: ' + year);

    resultStr = 
        `If you deposit $<span class="resultStr"><mark>${principal}</mark></span> \<br\>
        at an interest rate of <span class="resultStr"><mark>${rate}%</mark></span>, \<br\>
        you will receive an amount of $<span class="resultStr"><mark>${interest.toFixed(2)}</mark></span> \<br\>
        in the year <span class="resultStr"><mark>${year}</mark></span>. \<b\>`;  
            // console.log('Var resultStr: ' + resultStr);
    results();
    // console.log('results() ran');
    // Resets the form inputs, slider position, and focus
    setTimeout(() => getForm.reset(), 5000);
    setTimeout(() => resetRangeSlider(), 5000);
    setFocusOnPrincipal();
}
 
// // Validate input
// function validation() {
//     console.log('validation() entry');
//     let principalInput = document.getElementById('principal');      
//     // Solution sourced for this Free Code Camp blog article:
//     // https://www.freecodecamp.org/news/form-validation-with-html5-and-javascript/
//     // and repurposed to meet current code needs
//     principalInput.addEventListener('input', () => {
//         console.log('validation() handler entry');
       
//         // Clear all previous messages
//         principalInput.setCustomValidity('');
//         console.log('resets customValidity to empty');
//         // Check validity of input field for principal
//         principalInput.checkValidity();
//         console.log(principalInput.checkValidity());
//         console.log('checkValidity() ran'); 
//     });

//     // Listen for validity of principal input field
//     // Run alert if invalid
//     // Prevent default form submission
//     console.log('Invalid Check entry');
//     principalInput.addEventListener('invalid', (e) => {
//         e.preventDefault();
//                 console.log('invalid') 
//                 setTimeout(principalInput.setCustomValidity(alert('Enter a positive number.')));
//                 console.log('validity alert ran');
//         });
//         console.log('Invalid Check ran');   
// }

function validation(principal) {
    if (principal == '' || principal <=0 ) {
    alert('Enter a positive number');
    isValid = false;
    return false;
    }
    isValid = true;
    return true;
}

// Display results
function results() {
    console.log('results() entry');
    // Set results to display in #result span
    displayResults.innerHTML = resultStr;
    // console.log(displayResults.innerHTML = resultStr);

    // Reset #result span to empty after 5 secs
    setTimeout(() => displayResults.innerHTML = '', 5000);
    // Reset range slider text value to original value
    setTimeout(() => document.querySelector('#rate_val').innerHTML = '10.25%', 5000);
}
// Reset range slider to original position
function resetRangeSlider() {
    document.querySelector('#btn').addEventListener('click', ()=> {
    setTimeout(() => document.querySelector('#rate').value = 10.25, 5000);
    // document.querySelector('#rate_val').innerHTML = '10.25%';  For some reason this doesn't work here but it does in the results() function
    });
    // console.log('setTimeout complete');
}

// Set focus on prinicpal input field
function setFocusOnPrincipal() {
  document.querySelector('#principal').focus();
}