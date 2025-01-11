export class PowCommand {
  constructor(calculator, value) {
    this.calculator = calculator;
    this.value = value;
    this.undoResult = calculator.getSnapshot();
  }

  execute() {
    this.calculator.pow(this.value);
  }

  undo() {
    this.calculator.setSnapshot(this.undoResult);
  }
}
