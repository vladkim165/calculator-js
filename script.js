class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = `${this.currentOperand}${number}`;
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '*':
        computation = prev * current;
        break;
      case '÷':
        computation = prev / current;
        break;
      default:
        return;
    }
    const hasDecimals = computation.toString().split('').includes('.');
    if (hasDecimals) {
      let integer = computation.toString().split('.')[0];
      let decimal = computation.toString().split('.')[1];
      this.currentOperand = `${integer}.${decimal.slice(0, 8)}`;
      this.operation = undefined;
      this.previousOperand = '';
      return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
  }

  changePreviousOperation(operation) {
    if (this.currentOperand) {
      this.compute();
      return;
    }
    this.operation = operation;
    this.currentOperand = '';
  }

  sqrt() {
    this.currentOperand = currentOperandTextElement.textContent;
    const computation = Number(Math.sqrt(this.currentOperand).toString().split('').slice(0, 10).join(''));
    this.currentOperandTextElement.textContent = computation;
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
  }

  square() {
    this.currentOperand = currentOperandTextElement.textContent;
    const computation = Number(Math.pow(this.currentOperand, 2).toString().split('').slice(0, 10).join(''));
    this.currentOperandTextElement.textContent = computation;
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
  }

  updateDisplay() {
    this.currentOperandTextElement.textContent =
      this.currentOperand;
    if (this.operation != null) {
      this.previousOperandTextElement.textContent =
        `${this.previousOperand} ${this.operation}`;
    } else {
      this.previousOperandTextElement.textContent = '';
    }
  }
}


const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const equalsButton = document.querySelector('.equals');
const deleteButton = document.querySelector('.delete');
const allClearButton = document.querySelector('.all-clear');
const previousOperandTextElement = document.querySelector('.previous-operand');
const currentOperandTextElement = document.querySelector('.current-operand');
const squareButton = document.querySelector('.square');
const sqrtButton = document.querySelector('.sqrt');
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.textContent);
    calculator.updateDisplay();
  });
});

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (calculator.operation !== undefined) {
      calculator.changePreviousOperation(button.textContent);
    }
    calculator.chooseOperation(button.textContent);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener('click', button => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener('click', button => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener('click', button => {
  calculator.delete();
  calculator.updateDisplay();
});

squareButton.addEventListener('click', button => {
  calculator.square();
});

sqrtButton.addEventListener('click', button => {
  calculator.sqrt();
});