//UNIT TESTING STRINGS EXAMPLES USING DIFFERENT MATCHERS
const strings = require('./strings');

describe('Strings', () => {
  it('should return "Hello, World!"', () => {
    //when
    const result = strings.greeting();

    //then
    expect(result).toMatch(/Hello, World!/);
  });

  it("should return string containing substring, 'world'", () => {
    //when
    const result = strings.containsSubstring();

    //then
    expect(result).toContain('world');
  });
});

