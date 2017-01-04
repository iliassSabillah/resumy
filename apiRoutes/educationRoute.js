const express = require('express');
const educationRouter  = express.Router();
const models = require('../models');


// GET all educations information fully populated
const getAllEducation = (req, res)=>{
	models.Education.findAll({})
		.then((education)=> {
			res.send(education)
		})
};

// GET specific education by id
const getEducation = (req,res)=>{
	models.Education.findOne({where:{id:req.params.id}})
		.then(education=>{res.send(education)});
};

// POST (create) a new education
const postEducation = (req,res)=>{
	models.Education.create({
		school: req.body.school,
		startYear: req.body.startYear,
		endYear: req.body.endYear,
		current: req.body.current,
		gpa: req.body.gpa,
		achievements: req.body.achievements
	}).then(newEducation=> { res.send(newEducation)})
};


educationRouter.route('/')
	.get(getAllEducation)
	.post(postEducation);

educationRouter.route('/:id')
	.get(getEducation);


module.exports = educationRouter;
