export class Receiver {
  _result = 0;
  _secondNumber = null;
  _memory = 0;
  _command = null;
  _output = '';
  _isComma = false;

  constructor() {}

  add() {
    console.log(this._command);
    this._output = `${this.getResult()} + ${this.getSecondNumber()} = `;
    this._result += this._secondNumber;
    this._update();
  }

  subtract() {
    this._output = `${this.getResult()} - ${this.getSecondNumber()} = `;
    this._result -= this._secondNumber;
    this._update();
  }

  divide() {
    this._output = `${this.getResult()} / ${this.getSecondNumber()} = `;
    this._result /= this._secondNumber;
    this._update();
  }

  multiply() {
    this._output = `${this.getResult()} x ${this.getSecondNumber()} = `;
    this._result *= this._secondNumber;
    this._update();
  }

  reverseSign() {
    this._output = this.getResult();
    if (this._result !== 0) {
      this._result *= -1;
    }
    this._update();
  }

  pow(value) {
    this._output = `${this.getResult()}<sup class="index">${value}</sup> = `;
    this._result = this._result ** value;
    this._update();
  }

  pow10() {
    this._output = `10 <sup class="index">${this.getResult()}</sup> = `;
    this._result = 10 ** this._result;
    this._update();
  }

  customPow() {
    this._output = `${this.getResult()}<sup class="index">${this.getSecondNumber()}</sup> = `;
    this._result = this._result ** this._secondNumber;
    this._update();
  }

  fractionX() {
    this._output = `1/${this.getResult()} = `;
    this._result = 1 / this._result;
    this._update();
  }

  factorial() {
    this._output = `${this.getResult()}! = `;
    if (this._result < 0 || !Number.isInteger(this._result)) {
      this._result = 'Не определено';
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
    this._output = `<sup class="index">${value}</sup>&#8730; ${this.getResult()} = `;
    this._result = this._result ** (1 / value);
    this._update();
  }

  customSqrt() {
    this._output = `<sup class="index">${this.getSecondNumber()}</sup>&#8730; ${this.getResult()} = `;
    this._result = this._result ** (1 / this._secondNumber);
    this._update();
  }

  percent() {
    if (this._secondNumber) {
      this._secondNumber = (this._result * this._secondNumber) / 100;
    }
  }

  comma() {
    if (!this._isComma) {
      this._secondNumber
        ? this._setInput(`${this._secondNumber},`)
        : this._setInput(`${this._result},`);
      this._isComma = true;
    }
  }

  reset() {
    this._output = '';
    this._result = 0;
    this._update();
  }

  setNumber(value) {
    if (this._result === 'Не определено') {
      this.reset();
    }

    if (this.getCommand()) {
      // if (this._isComma) {
      //   this._setSecondNumber('.' + value.toString());
      // } else {
      //   this._setSecondNumber(value);
      // }
      this._setSecondNumber(value);
      return;
    }

    if (this._result === 0) {
      this._isComma
        ? (this._result = '0.' + value.toString())
        : (this._result = +value);
    } else {
      this._isComma
        ? (this._result = +(this._result.toString() + '.' + value.toString()))
        : (this._result = +(this._result.toString() + value));
    }
    this._setInput();
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
    console.log(this._result);
    console.log(this._command);
    console.log(this._secondNumber);
    this._result = value;
    console.log(this._result);
    console.log(this._command);
    console.log(this._secondNumber);
  }

  getSecondNumber() {
    return this._secondNumber;
  }

  addMemory() {
    this._memory += this._result;
  }

  subtractMemory() {
    this._memory -= this._result;
  }

  readMemory() {
    this._result = this._memory;
    this._setSecondNumber(null);
    this._setInput();
  }

  cleanMemory() {
    this._memory = 0;
  }

  setCommand(value) {
    this._command = value;
  }

  getCommand() {
    if (this.getResult() === 'Не определено') {
      this._command = null;
    }
    return this._command;
  }

  _setSecondNumber(value) {
    if (this._secondNumber === null || this._secondNumber === 0) {
      this._secondNumber = +value;
    } else {
      this._secondNumber = +(this._secondNumber.toString() + value);
    }
    this._setInput(this._secondNumber);
  }

  _setOutput() {
    const output = document.querySelectorAll('.output');
    output[0].innerHTML = this._output.toString().replace('.', ',');
  }

  _setInput(value = this.getResult()) {
    if (typeof value === 'number') {
      value = +value.toFixed(12);
    }
    const input = document.querySelectorAll('.input');
    input[0].textContent = value.toString().replace('.', ',');
    if (value === 'Не определено') {
      this._setOutput('');
    }
  }

  // _isSecondNumber() {
  //   return typeof this._secondNumber === 'number';
  // }

  _update() {
    if (this._secondNumber) {
      this._secondNumber = null;
    }
    this._command = null;
    this._setOutput();
    this._setInput();
    this._isComma = false;
  }
}
