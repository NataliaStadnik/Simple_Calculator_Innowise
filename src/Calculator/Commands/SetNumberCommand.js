export class SetNumberCommand {
  constructor(calculator, value) {
    this.calculator = calculator;
    this.value = value;
    this.undoResult = calculator.getResult();
  }

  execute() {
    this.calculator.setNumber(this.value);
  }

  undo() {
    this.calculator.setResult(this.undoResult);
  }
}
