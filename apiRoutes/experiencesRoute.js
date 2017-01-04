const express = require('express');
const experienceRouter  = express.Router();
const models = require('../models');


// GET all experiences information fully populated
const getExperiences = (req, res)=>{
	models.Experience.findAll({})
		.then((experiences)=> {
			res.send(experiences)
		})
};

// GET specific experience by id
const getExperience = (req,res)=>{
	models.Experience.findOne({where:{id:req.params.id}})
		.then(experience=>{res.send(experience)});
};

// POST (create) a new experience
const postExperience = (req,res)=>{
	models.Experience.create({
		position: req.body.position,
		company: req.body.company,
		startMonth: req.body.startMonth,
		startYear: req.body.startYear,
		endMonth: req.body.endMonth,
		endYear: req.body.endYear,
		current: req.body.current,
		location: req.body.location,
		description: req.body.description
	}).then(newExperience=> { res.send(newExperience)})
};


experienceRouter.route('/')
	.get(getExperiences)
	.post(postExperience);

experienceRouter.route('/:id')
	.get(getExperience);


module.exports = experienceRouter;
