export class MultiplyCommand {
  constructor(calculator) {
    this.calculator = calculator;
    this.undoResult = calculator.getResult();
  }

  execute() {
    this.calculator.multiply();
  }

  undo() {
    this.calculator.setResult(this.undoResult);
  }
}
