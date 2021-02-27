const Employee = require("../lib/Employee")

describe("Employee", () => {
  
      it("should return new team members instance of (Julie)", () => {
        const julie = "julie";
        const employee =  new Employee(julie);
  
        expect(employee.name).toEqual(julie);
      });
    
  })