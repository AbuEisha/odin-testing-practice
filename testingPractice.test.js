// math.test.js
import * as practice from "./testingPractice";

describe("Capitalize Function", () => {
  it("Missing Argument Return Empty String", () => {
    expect(practice.capitalize()).toBe("");
  });
  it("Empty String Return Empty string", () => {
    expect(practice.capitalize("")).toBe("");
  });
  it("hello Return Hello", () => {
    expect(practice.capitalize("hello")).toBe("Hello");
  });
  it("hello world Return Hello World", () => {
    expect(practice.capitalize("hello world")).toBe("Hello World");
  });
  it("hello world, mustafa Return Hello World, Mustafa", () => {
    expect(practice.capitalize("hello world, mustafa")).toBe(
      "Hello World, Mustafa"
    );
  });
});

describe("reverseString Function", () => {
  it("Missing Argument Return Empty String", () => {
    expect(practice.reverseString()).toBe("");
  });
  it("Empty String Return Empty String", () => {
    expect(practice.reverseString("")).toBe("");
  });
  it("Hello Return olleH", () => {
    expect(practice.reverseString("Hello")).toBe("olleH");
  });
  it("Hello World Return dlroW olleH", () => {
    expect(practice.reverseString("Hello World")).toBe("dlroW olleH");
  });
});

describe("Calculator Function", () => {
  it("Missing Argumnet Return You Should Enter Two Numbers", () => {
    expect(practice.calculator.add()).toBe("You Should Enter Two Numbers");
  });
  it("One Number Return You Should Enter Two Numbers", () => {
    expect(practice.calculator.add(5)).toBe("You Should Enter Two Numbers");
  });
  it("String Return You Should Enter Two Numbers", () => {
    expect(practice.calculator.add("l", "j")).toBe(
      "You Should Enter Two Numbers"
    );
  });
  it("Add 12 To 20 Return 32", () => {
    expect(practice.calculator.add(12, 20)).toBe(32);
  });
  it("Missing Argumnet Return You Should Enter Two Numbers", () => {
    expect(practice.calculator.subtract()).toBe("You Should Enter Two Numbers");
  });
  it("One Number Return You Should Enter Two Numbers", () => {
    expect(practice.calculator.subtract(5)).toBe(
      "You Should Enter Two Numbers"
    );
  });
  it("String Return You Should Enter Two Numbers", () => {
    expect(practice.calculator.subtract("l", "j")).toBe(
      "You Should Enter Two Numbers"
    );
  });
  it("Subtract 20 From 8 Return 12", () => {
    expect(practice.calculator.subtract(20, 8)).toBe(12);
  });
  it("Missing Argumnet Return You Should Enter Two Numbers", () => {
    expect(practice.calculator.divide()).toBe("You Should Enter Two Numbers");
  });
  it("One Number Return You Should Enter Two Numbers", () => {
    expect(practice.calculator.divide(5)).toBe("You Should Enter Two Numbers");
  });
  it("String Return You Should Enter Two Numbers", () => {
    expect(practice.calculator.divide("l", "j")).toBe(
      "You Should Enter Two Numbers"
    );
  });
  it("Divide 20 By 0 Return Can't Divide By Zero", () => {
    expect(practice.calculator.divide(20, 0)).toBe("Can't Divide By Zero");
  });
  it("Divide 30 By 5 Return 6", () => {
    expect(practice.calculator.divide(30, 5)).toBe(6);
  });
  it("Missing Argumnet Return You Should Enter Two Numbers", () => {
    expect(practice.calculator.multiply()).toBe("You Should Enter Two Numbers");
  });
  it("One Number Return You Should Enter Two Numbers", () => {
    expect(practice.calculator.multiply(5)).toBe(
      "You Should Enter Two Numbers"
    );
  });
  it("String Return You Should Enter Two Numbers", () => {
    expect(practice.calculator.multiply("l", "j")).toBe(
      "You Should Enter Two Numbers"
    );
  });
  it("Multiply 9 By 9 Return 81", () => {
    expect(practice.calculator.multiply(9, 9)).toBe(81);
  });
});

describe("caesarCipher Function", () => {
  it("xyz String And Shift 3 Return abc", () => {
    expect(practice.caesarCipher("xyz", 3)).toBe("abc");
  });
  it("HeLLo String And Shift 3 Return KhOOr", () => {
    expect(practice.caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });
  it("Hello, World! String And Shift 3 Return Khoor, Zruog!", () => {
    expect(practice.caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});

describe("analyzeArray Function", () => {
  it("Missing Argument Return {}", () => {
    expect(practice.analyzeArray()).toEqual({});
  });
  it("analyzeArray([1,8,3,4,2,6]) Return { average: 4, min: 1, max: 8, length: 6 }", () => {
    expect(practice.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
  it("analyzeArray(['1','2',3,4,5]) Return { average: 3, min: 1, max: 5, length: 5 }", () => {
    expect(practice.analyzeArray(["1", "2", 3, 4, 5])).toEqual({
      average: 3,
      min: 1,
      max: 5,
      length: 5,
    });
  });
});
