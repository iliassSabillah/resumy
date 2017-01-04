const userRouter = require('./userRoute');
const experienceRouter = require('./experiencesRoute');
const educationRouter= require('./educationRoute');
// const projectsRouter= require('./projectsRoute');
// const skillsRouter= require('./skillsRoute');
const signinRouter = require('./signinRoute');

module.exports = {
	userRouter:userRouter,
	experienceRouter:experienceRouter,
	educationRouter: educationRouter,
	signinRouter: signinRouter
	// projectsRouter:projectsRouter,
	// skillsRouter:skillsRouter
};
