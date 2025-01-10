import * as mth from './src/Calculator/utilits';

describe('Check correct sum', () => {
  it('Check correct sum', () => {
    expect(mth.add(4, 8)).toBe(12);
    expect(mth.add(9, -6)).toBe(3);
    expect(mth.add(-4, -8)).toBe(-12);
  });

  it('Check correct divide', () => {
    expect(mth.divide(14, 8)).toBe(1.75);
    expect(mth.divide(-20, -4)).toBe(5);
    expect(mth.divide(0, 0)).toBe(NaN);
    expect(mth.divide(-14, 8)).toBe(-1.75);
    expect(mth.divide(0, -4)).toBe(-0);
  });

  it('Check correct factorial', () => {
    expect(mth.factorial(0)).toBe(1);
    expect(mth.factorial(-3)).toBe(Infinity);
    expect(mth.factorial(3.4)).toBe(Infinity);
    expect(mth.factorial(4)).toBe(24);
  });

  it('Check correct fraction', () => {
    expect(mth.fraction(2)).toBe(0.5);
    expect(mth.fraction(-2)).toBe(-0.5);
    expect(mth.fraction(0)).toBe(Infinity);
  });

  it('Check correct multiply', () => {
    expect(mth.multiply(10, 8)).toBe(80);
    expect(mth.multiply(-20, -4)).toBe(80);
    expect(mth.multiply(0, 0)).toBe(0);
    expect(mth.multiply(0, -3)).toBe(-0);
    expect(mth.multiply(-4.5, 6)).toBe(-27);
  });

  it('Check correct percent', () => {
    expect(mth.percent(100, 5)).toBe(5);
    expect(mth.percent(100, 0)).toBe(0);
    expect(mth.percent(100, -5)).toBe(-5);
    expect(mth.percent(0, 50)).toBe(0);
  });

  it('Check correct pow', () => {
    expect(mth.pow(2, 3)).toBe(8);
    expect(mth.pow(-2, 3)).toBe(-8);
    expect(mth.pow(-2, 4)).toBe(16);
    expect(mth.pow(-2, 0)).toBe(1);
    expect(mth.pow(0, 3)).toBe(0);
    expect(mth.pow(-2, -2)).toBe(-0.25);
  });

  it('Check correct reverse sign', () => {
    expect(mth.reverse(-10)).toBe(10);
    expect(mth.reverse(70)).toBe(-70);
    expect(mth.reverse(0)).toBe(0);
  });

  it('Check correct sqrt', () => {
    expect(mth.sqrt(4, 2)).toBe(2);
    expect(mth.sqrt(-4, 2)).toBe(NaN);
    expect(mth.sqrt(8, 0)).toBe(Infinity);
    expect(mth.sqrt(3, 1)).toBe(3);
  });

  it('Check correct subtract', () => {
    expect(mth.subtr(14, 8)).toBe(6);
    expect(mth.subtr(0, 0)).toBe(0);
    expect(mth.subtr(-14, -8)).toBe(-6);
    expect(mth.subtr(-20, 9)).toBe(-29);
  });
});
