const Employees = require('./Employee');

class Engineer extends Employees {
	constructor(name, id, title, github) {
		super(name, id, title);
		this.github = github;
	}

	getGithub() {
		return this.github;
	}

	getRole() {
		return 'Engineer';
	}
}
module.exports = Engineer;
