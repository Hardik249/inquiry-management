console.log('roles')

const dbRoles = require('../../dbRoles');
const db = require('../../models/users');

module.exports = roles = async(req, res, next) => {
	const role = await db.findOne({
		roles: req.body.roles
	})	
	if (role) {
		console.log(`roles ${dbRoles}`)
	} else {
		console.log('other')
	}
}