"use strict";

module.exports = (sequelize, DataTypes)=> {
	const User = sequelize.define("User", {
		name: DataTypes.STRING,
		email: DataTypes.STRING,
		phone: DataTypes.STRING,
		address: DataTypes.STRING,
		links: {
			type: DataTypes.ARRAY(DataTypes.STRING)
		}

	}
	, {
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

