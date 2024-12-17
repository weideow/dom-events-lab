/*-------------------------------- Constants --------------------------------*/
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
let currentInput = "";

function updateDisplay() {
    display.textContent = currentInput;
  }
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
     
      console.log(event.target.innerText);

      const buttonNum = event.target.innerText;
      buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
          const buttonNum = event.target.innerText;
            {
            currentInput += buttonNum;
          }

          updateDisplay();
        });
      });
}

);
  });

  const calculator = document.querySelector('#calculator');
  calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    console.log(event.target.innerText);
    // Example
    if (event.target.classList.contains('number')) {
      
    }
  
    // Example
    if (event.target.innerText === '*') {
      // Do something with this operator
    }
  });
  


/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
