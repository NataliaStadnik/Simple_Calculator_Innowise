export class Pow10Command {
  constructor(calculator) {
    this.calculator = calculator;
    this.undoResult = calculator.getSnapshot();
  }

  execute() {
    this.calculator.pow10();
  }

  undo() {
    this.calculator.setSnapshot(this.undoResult);
  }
}
