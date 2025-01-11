export class SubtractMemoryCommand {
  constructor(calculator) {
    this.calculator = calculator;
  }

  execute() {
    this.calculator.subtractMemory();
  }
}
