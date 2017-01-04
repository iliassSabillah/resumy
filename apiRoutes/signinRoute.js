const signinRouter = require('express').Router();

const signinUser = (req,res)=>{
	const userInfo = req.body;
	User.sync()
		.then(()=>{
			return User.findOne({where:{
				email: userInfo.email
			}})
		}).then((user)=>{
		if(user && user.password === userInfo.password){
			console.log('user exists and password is correct');
			req.session.email=  user.email;
			req.session.save();
			return user;
		}
		else if(!user){
			console.log('user does not exist and creating new one');
			return User.create(userInfo)
		}else {console.log('incorrect password')}
	})
};

signinRouter.route('/signin')
	.post(signinUser);


module.exports = signinRouter;
