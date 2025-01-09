export class CustomSqrtCommand {
  constructor(calculator) {
    this.calculator = calculator;
    this.undoResult = calculator.getResult();
  }

  execute() {
    this.calculator.customSqrt();
  }

  undo() {
    this.calculator.setResult(this.undoResult);
  }
}
