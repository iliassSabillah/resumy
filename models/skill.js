"use strict";

module.exports = (sequelize, DataTypes)=> {
	const Skill = sequelize.define("Skill", {
			skill: DataTypes.STRING,
			github: DataTypes.STRING,
			url: DataTypes.STRING,
			description: DataTypes.STRING

		}
		, {
			classMethods: {
				associate: (models)=> {
					Skill.belongsTo(models.User)
				}
			}
		}
	);

	return Skill;
};
