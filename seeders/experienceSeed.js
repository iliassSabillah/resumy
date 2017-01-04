const Sequelize = require('sequelize');
const sequelizeConnection = require('../models/index');
const models = require('../models');

//Experience.sync will create the experiences table
models.Experience.sync({force: true})
//add the following experience to the database:
	.then(() => models.Experience.bulkCreate([
		{position: 'Web Developer', company:  'C4Q',startMonth: '7',startYear:'2016',endMonth:'4',endYear:'2017',current:'true',location:'lic',description:'Access Code produces high quality web developers through a 10-month curriculum developed and taught by leading experts from companies such as Artsy, Google, FlyLabs and Betaworks.'}

	]))
	//the following experiences should NOT be added to your database:
	//(if your validations are setup correctly)
	// .then(() => Experience.bulkCreate([
	// 	{position: ''},
	// 	{position: ['experience1', 'experience2']},
	// ], {validate: true}))

	// if everything is correct, you should only have THREE experiences in your database
	.catch((err) => console.log(err));
