export class FractionXCommand {
  constructor(calculator) {
    this.calculator = calculator;
    this.undoResult = calculator.getSnapshot();
  }

  execute() {
    this.calculator.fractionX();
  }

  undo() {
    this.calculator.setSnapshot(this.undoResult);
  }
}
