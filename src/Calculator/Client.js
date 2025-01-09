import './calculator.css';
import { Invoker } from './Invoker';

export class Client {
  constructor() {
    this.invoker = new Invoker();
    this.setListener();
  }

  setListener() {
    const BTN = document.querySelectorAll('.btn');
    BTN.forEach((btn) => {
      btn.addEventListener('click', () => {
        switch (Object.keys(btn.dataset)[0]) {
          case 'number':
            this.invoker.setNumber(btn.dataset.number);
            break;
          case 'double':
            if (typeof this.invoker.getSecondNumber() === 'number') {
              this.evaluate(this.invoker.getCommand());
            }
            this.invoker.setCommand(btn.dataset.double);
            break;
          case 'memory':
            this.switchMemoryBtn(btn);
            break;
        }
      });
    });
  }

  switchMemoryBtn(btn) {
    switch (btn.dataset.memory) {
      case '.':
        this.invoker.comma();
        break;
      case 'mc':
        this.invoker.cleanMemory();
        break;
      case 'mr':
        this.invoker.readMemory();
        break;
      case 'm+':
        if (typeof this.invoker.getSecondNumber() === 'number') {
          this.evaluate(this.invoker.getCommand());
        }
        this.invoker.addMemory();
        break;
      case 'm-':
        // if (typeof this.invoker.getSecondNumber() === 'number') {
        this.evaluate(this.invoker.getCommand());
        // }
        this.invoker.subtractMemory();
        break;
      case '=':
        // if (typeof this.invoker.getSecondNumber() === 'number') {
        this.evaluate(this.invoker.getCommand());
        // }
        break;
      case '%':
        this.invoker.percent();
        // if (typeof this.invoker.getSecondNumber() === 'number') {
        this.evaluate(this.invoker.getCommand());
        // }
        break;
      default:
        this.evaluate(btn.dataset.memory);
        break;
    }
  }

  evaluate(val) {
    switch (val) {
      case '+':
        this.invoker.add();
        break;
      case '-':
        this.invoker.subtract();
        break;
      case '*':
        this.invoker.multiply();
        break;
      case '/':
        this.invoker.divide();
        break;
      case 'x^y':
        this.invoker.customPow();
        break;
      case 'y-sq-x':
        this.invoker.customSqrt();
        break;
      case 'reverse':
        this.invoker.reverseSign();
        break;
      case 'x!':
        this.invoker.factorial();
        break;
      case '10^x':
        this.invoker.pow10();
        break;
      case 'x^3':
        this.invoker.pow(3);
        break;
      case 'x^2':
        this.invoker.pow(2);
        break;
      case '1/x':
        this.invoker.fractionX();
        break;
      case '2-sq-x':
        this.invoker.sqrt(2);
        break;
      case '3-sq-x':
        this.invoker.sqrt(3);
        break;
      case 'AC':
        this.invoker.reset();
        break;
      case 'delete':
        this.invoker.undo();
        // console.log(this.invoker.getSecondNumber());
        // this.invoker.setCommand(val);
        break;
    }

    if (val === 'delete') {
      // this.setInput(this.invoker.getCount());
      // this.setOutput(this.invoker.getCount());
    }
  }
}
