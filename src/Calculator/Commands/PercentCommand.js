export class PercentCommand {
  constructor(calculator) {
    this.calculator = calculator;
    this.undoResult = calculator.getResult();
  }

  execute() {
    this.calculator.percent();
  }

  undo() {
    this.calculator.setResult(this.undoResult);
  }
}
