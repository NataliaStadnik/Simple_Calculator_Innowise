export class SubtractCommand {
  constructor(calculator) {
    this.calculator = calculator;
    this.undoResult = calculator.getResult();
  }

  execute() {
    this.calculator.subtract();
  }

  undo() {
    this.calculator.setResult(this.undoResult);
  }
}
