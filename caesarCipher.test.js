
import { caesarCipher } from "./caesarCipher";

test("caesarCipher", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
  expect(caesarCipher("abc", 2)).toBe("cde");
  expect(caesarCipher("abc", 3)).toBe("def");
  expect(caesarCipher("Hello, World!", 5)).toBe("Mjqqt, Btwqi!");
});