const Sequelize = require('sequelize');
const sequelizeConnection = require('../models/index');
const models = require('../models');

//Skill.sync will create the skills table
models.Skill.sync({force: true})
//add the following skill to the database:
	.then(() => {
		return models.Skill.bulkCreate([
			{skill: 'Javascript'},
			{skill: 'NodeJs'},
			{skill: 'React'},
			{skill: 'HTML'},
			{skill: 'CSS'},
			{skill: 'PostgreSql'}

		]);
	})
	//the following skills should NOT be added to your database:
	//(if your validations are setup correctly)
	// .then(() => Skill.bulkCreate([
	// 	{title: ''},
	// 	{title: ['skill1', 'skill2']},
	// ], {validate: true}))

	// if everything is correct, you should only have THREE skills in your database
	.catch((err) => console.log(err));
