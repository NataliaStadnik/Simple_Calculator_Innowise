import * as mth from './utilits';
export const CALCULATION_ERROR_MESSAGE = 'Не определено';

export class Receiver {
  _result = 0;
  _Number = '';
  _command = '+';
  _output = '';
  _memory = 0;
  _first = true;

  constructor() {}

  add() {
    if (this._Number) {
      this._output = `${this._result} + ${this._Number} = `;
      this._result = mth.add(this._result, this._updateNumber());
      this._update();
    }
  }

  subtract() {
    if (this._Number) {
      this._output = `${this._result} - ${this._Number} = `;
      this._result = mth.subtr(this._result, this._updateNumber());
      this._update();
    }
  }

  divide() {
    if (this._Number) {
      this._output = `${this._result} / ${this._Number} = `;
      this._result = mth.divide(this._result, this._updateNumber());
      this._update();
    }
  }

  multiply() {
    if (this._Number) {
      this._output = `${this._result} x ${this._Number} = `;
      this._result = mth.multiply(this._result, this._updateNumber());
      this._update();
    }
  }

  reverseSign() {
    this._output = this._result;
    this._result = mth.reverse(this._result);
    this._update();
  }

  pow(value) {
    this._output = `${this._result}<sup class="index">${value}</sup> = `;
    this._result = mth.pow(this._result, value);
    this._update();
  }

  pow10() {
    this.pow(10);
  }

  customPow() {
    this._output = `${this._result}<sup class="index">${this._Number}</sup> = `;
    this._result = mth.pow(this._result, this._Number);
    this._update();
  }

  fractionX() {
    this._output = `1/${this._result} = `;
    this._result = mth.fraction(this._result);
    this._update();
  }

  factorial() {
    this._output = `${this._result}! = `;
    this._result = mth.factorial(this._result);
    this._update();
  }

  sqrt(value) {
    this._output = `<sup class="index">${value}</sup>&#8730; ${this._result} = `;
    this._result = mth.sqrt(this._result, value);
    this._update();
  }

  customSqrt() {
    this._output = `<sup class="index">${this._Number}</sup>&#8730; ${this._result} = `;
    this._result = mth.sqrt(this._result, this._Number);
    this._update();
  }

  percent() {
    if (this._result !== 0) {
      this._Number = mth.percent(this._Number, this._result);
    }
  }

  setNumber(value) {
    if (typeof this._result === 'string' || !this._command) {
      this.reset();
    }
    if (
      (value === '.' && this._Number.includes('.')) ||
      (value === '0' && this._result === 0 && !this._Number) ||
      (value === '0' && this._Number === '0')
    ) {
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

    this._Number = `${this._Number}${value}`;
    this._setInput(this._Number);
  }

  getResult() {
    if (
      this._result === Infinity ||
      this._result === -Infinity ||
      isNaN(this._result)
    ) {
      this._result = CALCULATION_ERROR_MESSAGE;
    }
    return this._result;
  }

  addMemory() {
    this._memory += this._result;
  }

  subtractMemory() {
    this._memory -= this._result;
  }

  readMemory() {
    this._result = this._memory;
    this._setInput(this.getResult());
    this._Number = '';
  }

  cleanMemory() {
    this._memory = 0;
  }

  getCommand() {
    return this._command;
  }

  setCommand(value) {
    this._command = value;
  }

  checkState() {
    if (this._result === CALCULATION_ERROR_MESSAGE) {
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
    this._first = true;
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
    if (this._first) {
      output[0].textContent = this._result;
      this._first = false;
    } else {
      output[0].innerHTML = this._output.toString().replaceAll('.', ',');
    }
  }

  _updateNumber() {
    return +this._Number.toString().replace(',', '.');
  }

  setSnapshot(value) {
    [
      this._result,
      this._Number,
      this._command,
      this._output,
      this._memory,
      this._first,
    ] = value;
    this._update();
  }

  getSnapshot() {
    return [
      this.getResult(),
      this._Number,
      this._command,
      this._output,
      this._memory,
      this._first,
    ];
  }
}
