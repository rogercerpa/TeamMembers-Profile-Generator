const Employees = require('./Employee');

class Manager extends Employees {
	constructor(name, id, title, officeNumber) {
		super(name, id, title);
		this.officeNumber = officeNumber;
	}

	getOfficeNumber() {
		return this.officeNumber;
	}

	getRole() {
		return 'Manager';
	}
}
module.exports = Manager;
