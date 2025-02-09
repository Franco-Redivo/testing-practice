
import { reverseString } from "./reverseString";

test("reverses a string", () => {
    expect(reverseString("hello")).toBe("olleh");
});

test("reverses a string with punctuation", () => {
    expect(reverseString("hello!")).toBe("!olleh");
});

test("reverses a string with numbers", () => {
    expect(reverseString("12345")).toBe("54321");
});

test("reverses an empty string", () => {
    expect(reverseString("")).toBe("");
});