export class AddCommand {
  constructor(calculator) {
    this.calculator = calculator;
    this.undoResult = calculator.getResult();
  }

  execute() {
    this.calculator.add();
  }

  undo() {
    this.calculator.setResult(this.undoResult);
  }
}
