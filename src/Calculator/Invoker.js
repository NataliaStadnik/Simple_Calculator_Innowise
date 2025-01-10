import * as Inner from './Commands/commands';
import { Receiver } from './Receiver';

export class Invoker {
  constructor() {
    this.calculator = new Receiver();
    this.commands = [];
    this.command = null;
  }

  add(value) {
    this.command = new Inner.AddCommand(this.calculator, value);
    this.pushAndExec();
  }

  subtract() {
    this.command = new Inner.SubtractCommand(this.calculator);
    this.pushAndExec();
  }

  multiply() {
    this.command = new Inner.MultiplyCommand(this.calculator);
    this.pushAndExec();
  }

  divide() {
    this.command = new Inner.DivideCommand(this.calculator);
    this.pushAndExec();
  }

  reverseSign() {
    this.command = new Inner.ReverseSignCommand(this.calculator);
    this.pushAndExec();
  }

  pow(value) {
    this.command = new Inner.PowCommand(this.calculator, value);
    this.pushAndExec();
  }

  pow10() {
    this.command = new Inner.Pow10Command(this.calculator);
    this.pushAndExec();
  }

  customPow() {
    this.command = new Inner.CustomPowCommand(this.calculator);
    this.pushAndExec();
  }

  fractionX() {
    this.command = new Inner.FractionXCommand(this.calculator);
    this.pushAndExec();
  }

  factorial() {
    this.command = new Inner.FactorialCommand(this.calculator);
    this.pushAndExec();
  }

  sqrt(value) {
    this.command = new Inner.SqrtCommand(this.calculator, value);
    this.pushAndExec();
  }

  customSqrt() {
    this.command = new Inner.CustomSqrtCommand(this.calculator);
    this.pushAndExec();
  }

  percent() {
    this.command = new Inner.PercentCommand(this.calculator);
    this.pushAndExec();
  }

  addMemory() {
    this.command = new Inner.AddMemoryCommand(this.calculator);
    this.pushAndExec();
  }

  subtractMemory() {
    this.command = new Inner.SubtractMemoryCommand(this.calculator);
    this.pushAndExec();
  }

  setNumber(value) {
    this.command = new Inner.SetNumberCommand(this.calculator, value);
    this.pushAndExec();
  }

  readMemory() {
    return this.calculator.readMemory();
  }

  cleanMemory() {
    return this.calculator.cleanMemory();
  }

  getCommand() {
    return this.calculator.getCommand();
  }

  checkState() {
    return this.calculator.checkState();
  }

  setCommand(value) {
    this.command = new Inner.SetCommand(this.calculator, value);
    this.pushAndExec();
  }

  reset() {
    return this.calculator.reset();
  }

  pushAndExec() {
    this.commands.push(this.command);
    this.command.execute();
  }

  undo() {
    if (this.commands.length !== 0) {
      this.command = this.commands.pop();
      this.command.undo();
      // console.log(this.command);
    }
  }
}
