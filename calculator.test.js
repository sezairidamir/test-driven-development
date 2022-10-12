const {divCalculator, addCalculator, multiCalculator, addMoreCalculator, subCalculator} = require("./calculator");

test("addition of 0.2 and 0.3 to equal 0.5", () => {
  expect(addCalculator(0.1, 0.2)).toBe(0.3 );
});


test("Subtraction of 3 and 2 to equal 1", () => {
 expect(subCalculator(3,2)).toBe(1);
});


test("Multiplication of 5 and 3 to equal 15", () => {
  expect(multiCalculator(0.2, 3)).toBe(0.6);
});


test("Division of 15 and 3 to equal 5", () => {
  expect(divCalculator(15, 3)).toBe(5);
});


test("Addition of 3 and 2 and 1 to equal 6", () => {
  expect(addMoreCalculator(3, 2, 1)).toBe(6);
});


