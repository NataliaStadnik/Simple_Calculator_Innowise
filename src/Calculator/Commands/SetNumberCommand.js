export class SetNumberCommand {
  constructor(calculator, value) {
    this.calculator = calculator;
    this.value = value;
  }

  execute() {
    this.calculator.setNumber(this.value);
  }
}
