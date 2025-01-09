export class ReverseSignCommand {
  constructor(calculator) {
    this.calculator = calculator;
    this.undoResult = calculator.getResult();
  }

  execute() {
    this.calculator.reverseSign();
  }

  undo() {
    this.calculator.setResult(this.undoResult);
  }
}
