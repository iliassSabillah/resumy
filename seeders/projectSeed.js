const Sequelize = require('sequelize');
const sequelizeConnection = require('../models/index');
const models = require('../models');

//Project.sync will create the projects table
models.Project.sync({force: true})
//add the following project to the database:
	.then(() => models.Project.bulkCreate([
		{project: 'TechBlog',link:'github.com/techblog',description:"tech blog news"}

	]))
	//the following projects should NOT be added to your database:
	//(if your validations are setup correctly)
	// .then(() => Project.bulkCreate([
	// 	{title: ''},
	// 	{title: ['project1', 'project2']},
	// ], {validate: true}))

	// if everything is correct, you should only have THREE projects in your database
	.catch((err) => console.log(err));
