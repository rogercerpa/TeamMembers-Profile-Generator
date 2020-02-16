const Employees = require('./Employee');

class Intern extends Employees {
	constructor(name, id, title, school) {
		super(name, id, title);
		this.school = school;
	}

	getSchool() {
		return this.school;
	}

	getRole() {
		return 'Intern';
	}
}
module.exports = Intern;
