export class FactorialCommand {
  constructor(calculator) {
    this.calculator = calculator;
    this.undoResult = calculator.getSnapshot();
  }

  execute() {
    this.calculator.factorial();
  }

  undo() {
    this.calculator.setSnapshot(this.undoResult);
  }
}
