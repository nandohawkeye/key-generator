import genKey from '../src/modules/generators';

describe("genKey", () => {

  test("generate key with correct size", () => {
    const key = genKey(10, true, true, true, true);
    expect(key.length).toBe(10);
  });

  test("generates only uppercase letters when capitalLetters is true", () => {
    const key = genKey(8, true, false, false, false);
    expect(/^[A-Z]+$/.test(key)).toBe(true);
  });

  test("returns an empty string if no option is selected", () => {
    const key = genKey(8, false, false, false, false);
    expect(key).toBe('');
  });

  test("generates numbers when numbers = true", () => {
    const key = genKey(10, false, false, true, false);
    expect(/^[0-9]+$/.test(key)).toBe(true);
  });
});
