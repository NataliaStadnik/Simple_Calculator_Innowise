export class SqrtCommand {
  constructor(calculator, value) {
    this.calculator = calculator;
    this.value = value;
    this.undoResult = calculator.getResult();
  }

  execute() {
    this.calculator.sqrt(this.value);
  }

  undo() {
    this.calculator.setResult(this.undoResult);
  }
}
