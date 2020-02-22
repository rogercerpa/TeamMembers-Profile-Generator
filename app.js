const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager.js');
const Employee = require('./lib/Employee.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');

const getRole = function() {
	inquirer.prompt([
		{
			type         : 'list',
			memberChoice : 'employeerole',
			message      : 'What is your Role in this Great Company?',
			choices      : [
				{
					name  : 'Manager',
					value : new Manager()
				},
				{
					name  : 'Engineer',
					value : new Engineer()
				},
				{
					name  : 'Intern',
					value : new Intern()
				}
			]
		}
	]);
}.then((userChoice) => {
	switch (userChoice.memberChoice) {
		case 'Manager':
			addEngineer();
			{
				inquirer.prompt([
					{
						type    : 'input',
						name    : 'github',
						message : 'What is your GitHub Account?'
					}
				]);
			}
			break;
		default:
			buildTeam();
	}
});

getRole();
console.log(getRole);
