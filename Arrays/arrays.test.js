//UNIT TESTING ARRAYS EXAMPLES USING DIFFERENT MATCHERS
const array = require("./arrays");

describe("arrays", () => {
  it('should pass when comparing two arrays that are equal to each other.', () => {
    //given
    const array1 = [1, 2, 3];

    //when
    const result = array.shouldEqualTo(array1);

    //then
    expect(result).toEqual([1, 2, 3]);
  });

  it('should pass if array contains element "strawberry".', () => {
    //given
    const fruits = ['banana', 'strawberry', 'pomegranate', 'mango'];

    //when
    const result = array.fruits(fruits);
    
    //then
    expect(result).toContain('strawberry');
  });

  it('should pass if arrays length is equal to five', () => {
    //given
    const colors = ['red', 'blue', 'yellow', 'green', 'orange'];

    //when
    const result = array.colors(colors);

    //then
    expect(result).toHaveLength(5);
  });
});
