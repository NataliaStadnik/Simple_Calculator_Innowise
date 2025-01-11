export class SubtractCommand {
  constructor(calculator) {
    this.calculator = calculator;
    this.undoResult = calculator.getSnapshot();
  }

  execute() {
    this.calculator.subtract();
  }

  undo() {
    this.calculator.setSnapshot(this.undoResult);
  }
}
