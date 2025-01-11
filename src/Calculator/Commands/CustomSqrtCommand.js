export class CustomSqrtCommand {
  constructor(calculator) {
    this.calculator = calculator;
    this.undoResult = calculator.getSnapshot();
  }

  execute() {
    this.calculator.customSqrt();
  }

  undo() {
    this.calculator.setSnapshot(this.undoResult);
  }
}
