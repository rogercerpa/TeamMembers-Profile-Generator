const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager.js');
const Employee = require('./lib/Employee.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');

employeesinfo = () => {
	inquirer
		.prompt([
			{
				type    : 'list',
				name    : 'employeerole',
				message : 'What is your Role in this Great Company?',
				choices : [
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
		])
		.then((data) => {
			const employeetype = data.employeerole;
			employeetype.inquirer.prompt([
				{
					type    : 'input',
					name    : 'employeename',
					message : 'What is your name?'
				},
				{
					type    : 'input',
					name    : 'id',
					message : 'Whats your ID#?'
				},
				{
					type    : 'input',
					name    : 'employeetitle',
					message : 'What is your title?'
				}
			]);
		});
};
employeesinfo();
