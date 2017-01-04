const express = require('express');
const userRouter  = express.Router();
const models = require('../models');


// GET all users information fully populated
const getUsers = (req, res)=>{
	models.User.findAll({})
		.then((users)=> {
			res.send(users)
		})
};

// GET specific user by id
const getUser = (req,res)=>{
	models.User.findOne({where:{id:req.params.id}})
		.then(user=>{res.send(user)});
};

// POST (create) a new user
const postUser = (req,res)=>{
	models.User.create({
		name: req.body.name,
		role: req.body.role,
		email: req.body.email,
		phone: req.body.phone,
		address: req.body.address,
		password: req.body.password,
		linkedIn: req.body.linkedIn,
		github: req.body.github,
		portfolio: req.body.portfolio,
		twitter: req.body.twitter
	}).then(newUser=> { res.send(newUser)})
};


userRouter.route('/')
	.get(getUsers)
	.post(postUser);

userRouter.route('/:id')
	.get(getUser);


module.exports = userRouter;
