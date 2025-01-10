export class FactorialCommand {
  constructor(calculator) {
    this.calculator = calculator;
    this.undoResult = calculator.getResult();
  }

  execute() {
    this.calculator.factorial();
  }

  undo() {
    this.calculator.setResult(this.undoResult);
  }
}
