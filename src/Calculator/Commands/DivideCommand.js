export class DivideCommand {
  constructor(calculator) {
    this.calculator = calculator;
    this.undoResult = calculator.getResult();
  }

  execute() {
    this.calculator.divide();
  }

  undo() {
    this.calculator.setResult(this.undoResult);
  }
}
