export class MultiplyCommand {
  constructor(calculator) {
    this.calculator = calculator;
    this.undoResult = calculator.getSnapshot();
  }

  execute() {
    this.calculator.multiply();
  }

  undo() {
    this.calculator.setSnapshot(this.undoResult);
  }
}
