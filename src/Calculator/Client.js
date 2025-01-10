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
        switch (Object.keys(btn.dataset)[0]) {
          case 'number':
            this.invoker.setNumber(btn.dataset.number);
            break;
          case 'memory':
            this.execute();
            this.invoker.setCommand(btn.dataset.memory);
            break;
          case 'single':
            this.single(btn.dataset.single);
        }
      });
    });
  }

  single(sign) {
    switch (sign) {
      case 'reverse':
        this.execute();
        this.invoker.reverseSign();
        break;
      case '%':
        this.invoker.percent();
        this.execute();
        this.invoker.setCommand(false);
        break;
      case 'x^3':
        this.execute();
        this.invoker.pow(3);

        break;
      case 'x^2':
        this.execute();
        this.invoker.pow(2);
        this.invoker.setCommand(false);
        break;
      case '10^x':
        this.execute();
        this.invoker.pow10();
        this.invoker.setCommand(false);
        break;
      case '1/x':
        this.execute();
        this.invoker.fractionX();
        this.invoker.setCommand(false);
        break;
      case '2-sq-x':
        this.execute();
        this.invoker.sqrt(2);
        this.invoker.setCommand(false);
        break;
      case '3-sq-x':
        this.execute();
        this.invoker.sqrt(3);
        this.invoker.setCommand(false);
        break;
      case 'x!':
        this.execute();
        this.invoker.factorial();
        this.invoker.setCommand(false);
        break;
      case '=':
        this.execute();
        this.invoker.setCommand(false);
        break;
      case 'AC':
        this.invoker.reset();
        break;
      case 'm+':
        this.execute();
        this.invoker.addMemory();
        break;
      case 'm-':
        this.execute();
        this.invoker.subtractMemory();
        break;
      case 'mr':
        this.invoker.readMemory();
        break;
      case 'mc':
        this.invoker.cleanMemory();
        break;
    }
  }

  execute(sign = this.invoker.getCommand()) {
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

      case 'delete':
        this.invoker.undo();
        break;
    }
  }
}
