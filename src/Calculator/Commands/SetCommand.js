export class SetCommand {
  constructor(calculator, value) {
    this.calculator = calculator;
    this.value = value;
    this.undoResult = calculator.getResult();
  }

  execute() {
    this.calculator.setCommand(this.value);
  }

  undo() {
    this.calculator.setResult(this.undoResult);
  }
}
