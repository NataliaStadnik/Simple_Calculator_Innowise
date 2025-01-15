export class PercentCommand {
  constructor(calculator) {
    this.calculator = calculator;
    this.undoResult = calculator.getSnapshot();
  }

  execute() {
    this.calculator.percent();
  }

  undo() {
    this.calculator.setSnapshot(this.undoResult);
  }
}
