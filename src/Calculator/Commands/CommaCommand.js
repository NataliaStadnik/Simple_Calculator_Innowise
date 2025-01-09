export class CommaCommand {
  constructor(calculator) {
    this.calculator = calculator;
    this.undoResult = calculator.getResult();
  }

  execute() {
    this.calculator.comma();
  }

  undo() {
    this.calculator.setResult(this.undoResult);
  }
}
