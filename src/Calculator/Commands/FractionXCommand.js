export class FractionXCommand {
  constructor(calculator) {
    this.calculator = calculator;
    this.undoResult = calculator.getResult();
  }

  execute() {
    this.calculator.fractionX();
  }

  undo() {
    this.calculator.setResult(this.undoResult);
  }
}
