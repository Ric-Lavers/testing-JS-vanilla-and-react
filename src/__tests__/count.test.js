import countWords from '../countWords'

describe('the counting fuction', () => {
  it("count the correct number of words" , () => {
    expect(countWords("one two three")).toBe(3);
  });
  it("doesn't miscount the number of words" , () => {
    expect(countWords("one two three")).not.toBe(5);
  });
  it("count an empty string" , () => {
    expect(countWords("")).toBe(0);
  });
  //test regex
  it("count the correct number of words" , () => {
    expect(countWords("$ lots of money")).toBe(3);
  });
});
