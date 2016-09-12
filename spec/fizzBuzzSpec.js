describe("Fizzbuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

 it("should print numbers 1 to 10", function() {
   fizzbuzz.print();
   expect(fizzbuzz.printOut).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
 });


});
