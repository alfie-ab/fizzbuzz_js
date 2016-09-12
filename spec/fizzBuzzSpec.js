describe("FizzBuzz", function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it("should print fizz if the number % 3 == 0", function() {
   expect(fizzBuzz.play(3)).toEqual('fizz');
 });

  it("it should not print out fizz if the number is 4", function() {
    expect(fizzBuzz.play(4)).not.toEqual('fizz');
  });

  it("should print out buzz if the number is divisible by 5", function() {
    expect(fizzBuzz.play(5)).toEqual('buzz');
  });

  it("should print out fizzbuzz if the number is divisible by 15", function () {
    expect(fizzBuzz.play(15)).toEqual('fizzbuzz');
  });
});
