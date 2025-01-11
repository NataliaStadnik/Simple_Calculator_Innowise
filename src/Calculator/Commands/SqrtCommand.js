export class SqrtCommand {
  constructor(calculator, value) {
    this.calculator = calculator;
    this.value = value;
    this.undoResult = calculator.getSnapshot();
  }

  execute() {
    this.calculator.sqrt(this.value);
  }

  undo() {
    this.calculator.setSnapshot(this.undoResult);
  }
}
