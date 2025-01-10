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
        this.invoker.checkState();
        const command = this.invoker.getCommand();

        switch (Object.keys(btn.dataset)[0]) {
          case 'number':
            this.invoker.setNumber(btn.dataset.number);
            break;
          case 'memory':
            this.execute(command);
            this.invoker.setCommand(btn.dataset.memory);
            break;
          case 'single':
            this.execute(command);
            this.execute(btn.dataset.single);
            this.invoker.setCommand(false);
            break;
          case 'percent':
            this.invoker.percent();
            this.execute(command);
            this.invoker.setCommand(false);
            break;
        }
      });
    });
  }

  execute(sign) {
    switch (sign) {
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
      case 'x^3':
        this.invoker.pow(3);
        break;
      case 'x^2':
        this.invoker.pow(2);
        break;
      case '10^x':
        this.invoker.pow10();
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
      case 'x!':
        this.invoker.factorial();
        break;
      case 'AC':
        this.invoker.reset();
        break;
      case 'm+':
        this.invoker.addMemory();
        break;
      case 'm-':
        this.invoker.subtractMemory();
        break;
      case 'mr':
        this.invoker.readMemory();
        break;
      case 'mc':
        this.invoker.cleanMemory();
        break;

      case 'delete':
        this.invoker.undo();
        break;
    }
  }
}
