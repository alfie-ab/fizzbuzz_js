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
});
