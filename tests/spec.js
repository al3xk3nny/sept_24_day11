describe("Calculator", function() {
    describe("Addition tests", function() {
      it("should return 42", function() { //First test should return red(fail) as function not defined - see calc.js
         expect(add(20, 22)).toBe(42);
      });
      it("should not return 42 for different numbers", function() { //Second test should return red(fail) as expected 42 to be 10- see calc.js.
         expect(add(5, 5)).toBe(10); 
      });
      it("should return an Error if both arguments are not numbers", function() { //Third test shoudl return red(fail) as expected 'Fish5' to be 'Error' - see calc.js.
          expect(add("Fish", 5)).toBe("Error");
      });
      it("should return an Error if one argument is null", function() { //Sometimes we run extra tests to prove the previous test wasn't a fluke. Not necessary to prove in calc.js in this case.
         expect(add(42, null)).toBe("Error"); 
      });
    });
    describe("Subtraction tests", function() {
       it("should return 42", function() {
         expect(sub(84, 42)).toBe(42);  
       });
       it("should not return 42 for different numbers", function() {
            expect(sub(22, 20)).toBe(2);
        });
       it("should show an alert on error", function() {
           spyOn(window, "alert");
           sub("Fish", 42);
           expect(window.alert).toHaveBeenCalledWith("Error");
       });
    });
    describe("Multiplication tests", function() {
       it("should return 42", function() {
           expect(mul(6, 7)).toBe(42);
       });
       it("should not return 42 for different numbers", function() {
          expect(mul(8, 10)).toBe(80); 
       });
       it("should return an Error if both arguments are not numbers", function() {
           expect(mul("Chips", 7)).toBe("Error");
       });
    });
});