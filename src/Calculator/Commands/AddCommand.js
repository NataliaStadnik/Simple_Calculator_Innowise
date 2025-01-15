export class AddCommand {
  constructor(calculator) {
    this.calculator = calculator;
    this.undoResult = calculator.getSnapshot();
  }

  execute() {
    this.calculator.add();
  }

  undo() {
    this.calculator.setSnapshot(this.undoResult);
  }
}
