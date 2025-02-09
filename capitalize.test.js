import { jest, describe } from "@jest/globals";
import { capitalize } from "./capitalize";




// describe("capitalize", () => {
//     it("capitalizes the first letter of a string", () => {
//         expect(capitalize("hello")).toBe("Hello");
//     });
//     it("works with a single letter string", () => {
//         expect(capitalize("h")).toBe("H");
//     });
//     it("works with an empty string", () => {
//         expect(capitalize("")).toBe("");
//     });
// });

test("capitalizes the first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
});

test("works with a single letter string", () => {
    expect(capitalize("h")).toBe("H");
});

test("works with an empty string", () => {
    expect(capitalize("")).toBe("");
});