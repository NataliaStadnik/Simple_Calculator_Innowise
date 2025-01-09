export class SubtractMemoryCommand {
  constructor(calculator) {
    this.calculator = calculator;
    this.undoResult = calculator.getResult();
  }

  execute() {
    this.calculator.subtractMemory();
  }

  undo() {
    this.calculator.setResult(this.undoResult);
  }
}
