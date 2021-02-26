const Employee = require("./Employee")


class Engineer extends Employee {
    constructor (name,id,email,school) {
        super (name,id,email,)
        this.school = school  
    }
    getRole () {
        return "Intern"
    }
    getschool () {
        return this.school
    }
}

module.exports = Engineer