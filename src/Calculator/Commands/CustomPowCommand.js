export class CustomPowCommand {
  constructor(calculator) {
    this.calculator = calculator;
    this.undoResult = calculator.getSnapshot();
  }

  execute() {
    this.calculator.customPow(this.value);
  }

  undo() {
    this.calculator.setSnapshot(this.undoResult);
  }
}
