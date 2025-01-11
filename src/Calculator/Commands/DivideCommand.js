export class DivideCommand {
  constructor(calculator) {
    this.calculator = calculator;
    this.undoResult = calculator.getSnapshot();
  }

  execute() {
    this.calculator.divide();
  }

  undo() {
    this.calculator.setSnapshot(this.undoResult);
  }
}
