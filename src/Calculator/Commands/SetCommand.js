export class SetCommand {
  constructor(calculator, value) {
    this.calculator = calculator;
    this.value = value;
  }

  execute() {
    this.calculator.setCommand(this.value);
  }
}
