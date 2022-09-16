console.log('db Roles')

const config = require('dotenv').config();

const dbRoles = {
	0: 'Admin',
	1: 'HR',
	2: 'Sales',
}

module.exports = dbRoles;