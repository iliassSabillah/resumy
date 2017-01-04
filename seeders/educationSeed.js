const Sequelize = require('sequelize');
const sequelizeConnection = require('../models/index');
const models = require('../models');

//Education.sync will create the education table
models.Education.sync({force: true})
//add the following education to the database:
	.then(() => models.Education.bulkCreate([
		{school: 'Queens College',startYear:'2014',endYear:'2017',current:'false',gpa:'3.6',achievements:"Bachelor's degree"}

	]))
	//the following education should NOT be added to your database:
	//(if your validations are setup correctly)
	// .then(() => Education.bulkCreate([
	// 	{school: ''},
	// 	{school: ['education1', 'education2']},
	// ], {validate: true}))

	// if everything is correct, you should only have THREE education in your database
	.catch((err) => console.log(err));
