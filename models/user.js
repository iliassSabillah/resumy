"use strict";

module.exports = (sequelize, DataTypes)=> {
	const User = sequelize.define("User", {
		name: DataTypes.STRING,
		role: DataTypes.STRING,
		email: DataTypes.STRING,
		phone: DataTypes.STRING,
		address: DataTypes.STRING,
		password: DataTypes.STRING,
		linkedIn: DataTypes.STRING,
		github: DataTypes.STRING,
		portfolio: DataTypes.STRING,
		twitter: DataTypes.STRING

	}, {
		classMethods: {
			associate: (models)=> {
				User.hasMany(models.Experience);
				User.hasMany(models.Education);
				User.hasMany(models.Project);
				User.hasMany(models.Skill);
			}
		}
	}
	);

	return User;
};

