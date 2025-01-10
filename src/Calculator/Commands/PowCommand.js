export class PowCommand {
  constructor(calculator, value) {
    this.calculator = calculator;
    this.value = value;
    this.undoResult = calculator.getResult();
  }

  execute() {
    this.calculator.pow(this.value);
  }

  undo() {
    this.calculator.setResult(this.undoResult);
  }
}
