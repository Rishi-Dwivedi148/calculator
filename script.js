// var buttons = document.getElementsByClassName("btn");
// var display = document.getElementById("display");
// var operand1 = 0;
// var operand2 = null;
// var operator = null;

// for(var i = 0; i < buttons.length; i++){
//     console.log(i);
//     console.log(buttons[i])
//     buttons[i].addEventListener("click",function(){
//         var value = this.getAttribute("data-value");
//         if(value == "+"){
//             operator = '+';
//             operand1 = parseFloat(display.textContent);
//         }
//         else if(value == "="){
//             operand2 = parseFloat(display.textContent);
//             var result = eval(operand1 + operator + operand2 );
//             display.innerText = result;
//         }
//         else{
//             display.innerText += value;
//         }
//     })
        


// }


// class Calculator{
//     constructor(previousOperandTextElement , currentOperandTextElement){
//         this.previousOperandTextElement = previousOperandTextElement;
//         this.currentOperandTextElement = currentOperandTextElement;
//         // this.currentOperand = '';
//         // this.previousOperand = '';
//         // this.operation = undefined;
//         this.clear();
//     }

//     clear(){
//         this.currentOperand = '';
//         this.previousOperand = '';
//         this.operation = undefined;

//     }

//     delete(){
//         this.currentOperand = this.currentOperand.toString().slice(0 , -1);

//     }

//     appendNumber(number){
//         if(number === '.' && this.currentOperand.includes('.')) return
//         this.currentOperand = String(this.currentOperand) + String(number)
        
//     }
    
//     chooseOperation(operation){
//         if(this.currentOperand === '') return
//         if (this.currentOperand !== ''){
//             this.compute
//         }
//         this.operation = operation
//         this.previousOperand = this.currentOperand
//         this.currentOperand = ''

//     }

//     compute(){
//         let computation
//         const prev = parseFloat(this.previousOperand)
//         const current = parseFloat(this.currentOperand)
//         if (isNaN(prev) || isNaN(current)) return
//         switch (this.operation) {
//         case '+':
//             computation = prev + current
//             break
//         case '-':
//             computation = prev - current
//             break
//         case '*':
//             computation = prev * current
//             break
//         case '÷':
//             computation = prev / current
//             break
//         case "%":
//             computation = (prev/100)*current
//             break
//         default:
//             return

//         }
//         this.currentOperand = computation
//         this.operation = undefined
//         this.previousOperand = ''
       
        
//     }

//     getDisplayNumber(number) {
//         const stringNumber = number.toString()
//         const integerDigits = parseFloat(stringNumber.split('.')[0])
//         const decimalDigits = stringNumber.split('.')[1]
//         let integerDisplay
//         if (isNaN(integerDigits)) {
//           integerDisplay = ''
//         } else {
//           integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
//         }
//         if (decimalDigits != null) {
//           return `${integerDisplay}.${decimalDigits}`
//         } else {
//           return integerDisplay
//         }
//       }


//     updateDisplay(){
//         this.currentOperandTextElement.innerText =
//         this.getDisplayNumber(this.currentOperand)
//         if (this.operation != null) {
//         this.previousOperandTextElement.innerText =
//             `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
//         } else {
//         this.previousOperandTextElement.innerText = ''
//         }
  

//     }


    

// }


// const numberButtons = document.querySelectorAll('div[data-value]');
// const operationButtons = document.querySelectorAll('div[data-operation]');
// const equalButton = document.querySelector('div[data-equals]');
// const deleteButton = document.querySelector('div[data-delete]');
// const allClearBtn = document.querySelector('div[data-allclear]');
// const previousOperandTextElement = document.querySelector('div[data-previous-operand]');
// const currentOperandTextElement = document.querySelector('div[data-current-operand]');


// const calculator = new Calculator(previousOperandTextElement , currentOperandTextElement);

// numberButtons.forEach(button =>{
//     button.addEventListener('click', ()=>{
//         calculator.appendNumber(button.innerText)
//         calculator.updateDisplay()
//     })
// })

// operationButtons.forEach(button => {
//     button.addEventListener("click" , ()=>{
//         calculator.chooseOperation(button.innerText);
//         calculator.updateDisplay()
//     })
// })

// equalButton.addEventListener('click', button => {
//     calculator.compute()
//     calculator.updateDisplay()
//   })
  
// allClearBtn.addEventListener('click', button => {
//     calculator.clear()
//     calculator.updateDisplay()
//   })
  
// deleteButton.addEventListener('click', button => {
//     calculator.delete()
//     calculator.updateDisplay()
//   })

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()
    }
  
    clear() {
      this.currentOperand = ''
      this.previousOperand = ''
      this.operation = undefined
    }
  
    delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
  
    appendNumber(number) {
      if (number === '.' && this.currentOperand.includes('.')) return
      this.currentOperand = this.currentOperand.toString() + number.toString()
    }
  
    chooseOperation(operation) {
      if (this.currentOperand === '') return
      if (this.previousOperand !== '') {
        this.compute()
      }
      this.operation = operation
      this.previousOperand = this.currentOperand
      this.currentOperand = ''
    }
  
    compute() {
      let computation
      const prev = parseFloat(this.previousOperand)
      const current = parseFloat(this.currentOperand)
      if (isNaN(prev) || isNaN(current)) return
      switch (this.operation) {
        case '+':
          computation = prev + current
          break
        case '-':
          computation = prev - current
          break
        case '*':
          computation = prev * current
          break
        case '÷':
          computation = prev / current
          break
        default:
          return
      }
      this.currentOperand = computation
      this.operation = undefined
      this.previousOperand = ''
    }
  
    getDisplayNumber(number) {
      console.log(number)
      console.log(typeof(number))
      const stringNumber = number.toString()
      console.log(typeof(stringNumber))
      const integerDigits = parseFloat(stringNumber.split('.')[0])
      console.log(integerDigits)
      const decimalDigits = stringNumber.split('.')[1]
      console.log(decimalDigits)
      let integerDisplay
      if (isNaN(integerDigits)) {
        integerDisplay = ''
      } else {
        integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
      }
      if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
      } else {
        return integerDisplay
      }
    }
  
    updateDisplay() {
      this.currentOperandTextElement.innerText =
        this.getDisplayNumber(this.currentOperand)
      if (this.operation != null) {
        this.previousOperandTextElement.innerText =
          `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
      } else {
        this.previousOperandTextElement.innerText = ''
      }
      
    }
  }
  
  
  const numberButtons = document.querySelectorAll('[data-number]')
  const operationButtons = document.querySelectorAll('[data-operation]')
  const equalsButton = document.querySelector('[data-equals]')
  const deleteButton = document.querySelector('[data-delete]')
  const allClearButton = document.querySelector('[data-all-clear]')
  const previousOperandTextElement = document.querySelector('[data-previous-operand]')
  const currentOperandTextElement = document.querySelector('[data-current-operand]')
  
  const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
  
  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })
  
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    })
  })
  
  equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
  })
  
  allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
  })
  
  deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
  })