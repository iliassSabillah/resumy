"use strict";

module.exports = (sequelize, DataTypes)=> {
	const Project = sequelize.define("Project", {
			project: DataTypes.STRING,
			github: DataTypes.STRING,
			site: DataTypes.STRING,
			description: DataTypes.STRING

		}
		, {
			classMethods: {
				associate: (models)=> {
					Project.belongsTo(models.User)
				}
			}
		}
	);

	return Project;
};
