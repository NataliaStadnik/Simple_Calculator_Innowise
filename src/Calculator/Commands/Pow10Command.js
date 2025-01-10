export class Pow10Command {
  constructor(calculator) {
    this.calculator = calculator;
    this.undoResult = calculator.getResult();
  }

  execute() {
    this.calculator.pow10();
  }

  undo() {
    this.calculator.setResult(this.undoResult);
  }
}
