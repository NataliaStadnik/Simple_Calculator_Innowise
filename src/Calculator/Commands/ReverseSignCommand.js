export class ReverseSignCommand {
  constructor(calculator) {
    this.calculator = calculator;
    this.undoResult = calculator.getSnapshot();
  }

  execute() {
    this.calculator.reverseSign();
  }

  undo() {
    this.calculator.setSnapshot(this.undoResult);
  }
}
