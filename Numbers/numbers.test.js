//UNIT TESTING NUMBERS EXAMPLES USING DIFFERENT MATCHERS
const numbers = require("./numbers");

describe('Numbers', () => {
  it('should return three when adding one and two together', () => {
    //given
    const num1 = 1;
    const num2 = 2;

    //when
    const result = numbers.add(num1, num2);

    //then
    expect(result).toBe(3);
  });

  it('should return six when subtracting ten with four', () => {
    //given
    const num1 = 10;
    const num2 = 4;

    //when
    const result = numbers.minus(num1, num2);

    //then
    expect(result).toBe(6);
  });

  it('should return number greater than three when adding five and two together', () => {
    //given
    const num1 = 5;
    const num2 = 2;

    //when
    const result = numbers.greaterThan(num1, num2);

    //then
    expect(result).toBeGreaterThan(3);
  });

  it('should return number greater than or equal to three when adding two and two together', () => {
    //given
    const num1 = 2;
    const num2 = 2;

    //when
    const result = numbers.greaterThanOrEqual(num1, num2);

    //then
    expect(result).toBeGreaterThanOrEqual(3);
  });

  it('should return number less than four when adding one and two together', () => {
    //given
    const num1 = 1;
    const num2 = 2;
    
    //when
    const result = numbers.lessThan(num1, num2);

    //then
    expect(result).toBeLessThan(4);
  });

  it('should return number less than or equal to five when adding four and one together', () => {
    //given
    const num1 = 4;
    const num2 = 1;

    //when
    const result = numbers.lessThanOrEqual(num1, num2);

    //then
    expect(result).toBeLessThanOrEqual(5);
  });

  it('should return number close to 0.3 when adding 0.1 and 0.2 together', () => {
    //given
    const num1 = 0.1;
    const num2 = 0.2;

    //when
    const result = numbers.beCloseTo(num1, num2);

    //then
    expect(result).toBeCloseTo(0.3);
  });
});