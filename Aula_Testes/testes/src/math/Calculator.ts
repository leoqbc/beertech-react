export default class Calculator {
  constructor(
    public accumulator: number
  ) { }

  public getResult(): number {
    return this.accumulator;
  }

  public sum(value: number): this {
    this.accumulator += value;
    return this;
  }

  public sub(value: number): this {
    this.accumulator -= value;
    return this;
  }

  public pow(value: number): this {
    this.accumulator **= value;
    return this;
  }
}