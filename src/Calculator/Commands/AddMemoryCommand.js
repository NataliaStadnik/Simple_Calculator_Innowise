export class AddMemoryCommand {
  constructor(calculator) {
    this.calculator = calculator;
    this.undoResult = calculator.getResult();
  }

  execute() {
    this.calculator.addMemory();
  }

  undo() {
    this.calculator.setResult(this.undoResult);
  }
}
