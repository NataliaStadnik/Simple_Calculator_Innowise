export class AddMemoryCommand {
  constructor(calculator) {
    this.calculator = calculator;
  }

  execute() {
    this.calculator.addMemory();
  }
}
