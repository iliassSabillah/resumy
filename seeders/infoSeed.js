const Sequelize = require('sequelize');
const sequelizeConnection = require('../models/index');
const models = require('../models');

//User.sync will create the users table
models.User.sync({force: true})
//add the following user to the database:
	.then(() => models.User.bulkCreate([
		{name: 'ILIASS SABILLAH', role:  'Web Developer',email: 'iliass@gmail.com',phone:'3475136470',address:'123 main st',password:'pass',linkedIn:'linkedIn.com',github:'github.com',portfolio:'portfolio.com',twitter:'twitter.com'}

	]))
	//the following users should NOT be added to your database:
	//(if your validations are setup correctly)
	// .then(() => User.bulkCreate([
	// 	{name: ''},
	// 	{name: ['user1', 'user2']},
	// ], {validate: true}))

	// if everything is correct, you should only have THREE users in your database
	.catch((err) => console.log(err));
