"use strict";

module.exports = (sequelize, DataTypes)=> {
	const Skill = sequelize.define("Skill", {
			skill: DataTypes.STRING
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
