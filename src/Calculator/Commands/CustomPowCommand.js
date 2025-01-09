export class CustomPowCommand {
  constructor(calculator) {
    this.calculator = calculator;
    this.undoResult = calculator.getResult();
  }

  execute() {
    this.calculator.customPow(this.value);
  }

  undo() {
    this.calculator.setResult(this.undoResult);
  }
}
