export class Receiver {
  _result;
  _Number;
  _memory;
  _command;
  _output;

  constructor() {
    this.reset();
  }

  add() {
    if (!this._Number) {
      return;
    }
    this._output = `${this._result} + ${this._Number} = `;
    this._result += +this._Number.toString().replace(',', '.');
    this._update();
  }

  subtract() {
    if (!this._Number) {
      return;
    }
    this._output = `${this._result} - ${this._Number} = `;
    this._result -= +this._Number.toString().replace(',', '.');
    this._update();
  }

  divide() {
    if (!this._Number) {
      return;
    }
    this._output = `${this._result} / ${this._Number} = `;
    this._result /= +this._Number.toString().replace(',', '.');
    this._update();
  }

  multiply() {
    if (!this._Number) {
      return;
    }
    this._output = `${this._result} x ${this._Number} = `;
    this._result *= +this._Number.toString().replace(',', '.');
    this._update();
  }

  reverseSign() {
    this._output = this._result;
    if (this._result !== 0) {
      this._result *= -1;
    }
    this._update();
  }

  pow(value) {
    this._output = `${this._result}<sup class="index">${value}</sup> = `;
    this._result = this._result ** value;
    this._update();
  }

  pow10() {
    this._output = `10 <sup class="index">${this._result}</sup> = `;
    this._result = 10 ** this._result;
    this._update();
  }

  customPow() {
    this._output = `${this._result}<sup class="index">${this._Number}</sup> = `;
    this._result = this._result ** this._Number;
    this._update();
  }

  fractionX() {
    this._output = `1/${this._result} = `;
    this._result = 1 / this._result;
    this._update();
  }

  factorial() {
    this._output = `${this._result}! = `;
    if (this._result < 0 || !Number.isInteger(this._result)) {
      this._result = Infinity;
    } else if (this._result === 0) {
      this._result = 1;
    } else {
      let start = 1;
      for (let i = 2; i <= this._result; i++) {
        start *= i;
      }
      this._result = start;
    }
    this._update();
  }

  sqrt(value) {
    this._output = `<sup class="index">${value}</sup>&#8730; ${this._result} = `;
    this._result = this._result ** (1 / value);
    this._update();
  }

  customSqrt() {
    this._output = `<sup class="index">${this._Number}</sup>&#8730; ${this._result} = `;
    this._result = this._result ** (1 / this._Number);
    this._update();
  }

  percent() {
    if (this._Number) {
      this._Number = (this._result * this._Number) / 100;
    }
  }

  setNumber(value) {
    if (typeof this._result === 'string' || !this._command) {
      this.reset();
    }
    if (value === '.' && this._Number.includes('.')) {
      return;
    }

    if (value === '.' && this._Number === '') {
      this._Number = '0.';
      this._setInput(this._Number);
      return;
    }

    if (value === '0' && this._command === '/') {
      this._result = Infinity;
      this._setInput(this.getResult());
      return;
    }

    if (value === '0' && this._Number === '') {
      return;
    }
    // fix 0 in second number

    this._Number = `${this._Number}${value}`;
    this._setInput(this._Number);
  }

  getResult() {
    if (
      this._result === Infinity ||
      this._result === -Infinity ||
      isNaN(this._result)
    ) {
      this._result = 'Не определено';
    }
    return this._result;
  }

  setResult(value) {
    this._result = value;
  }

  addMemory() {
    this._command = false;
    this._memory += this._result;
  }

  subtractMemory() {
    this._command = false;
    this._memory -= this._result;
  }

  readMemory() {
    this._command = false;
    this._result = this._memory;
    this._setInput(this.getResult());
    this._Number = '';
  }

  cleanMemory() {
    this._memory = 0;
    this._command = false;
  }

  getCommand() {
    return this._command;
  }

  setCommand(value) {
    this._command = value;
  }

  checkState() {
    if (this._result === 'Не определено') {
      this.reset();
    }
  }

  reset() {
    this._result = 0;
    this._Number = '';
    this._command = '+';
    this._output = '';
    this._setOutput();
    this._setInput(this._result);
  }

  _update() {
    this._setInput(this.getResult());
    this._setOutput();
    this._Number = '';
  }

  _setInput(value) {
    if (typeof value === 'number') {
      value = +value.toFixed(12);
    }
    const input = document.querySelectorAll('.input');
    input[0].textContent = value.toString().replace('.', ',');
  }

  _setOutput() {
    const output = document.querySelectorAll('.output');
    output[0].innerHTML = this._output.toString().replace('.', ',');
  }
}
