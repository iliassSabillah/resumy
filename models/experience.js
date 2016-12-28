"use strict";

module.exports = (sequelize, DataTypes)=> {
	const Experience = sequelize.define("Experience", {
			position: DataTypes.STRING,
			company: DataTypes.STRING,
			startMonth: DataTypes.INTEGER,
			startYear: DataTypes.INTEGER,
			endMonth: DataTypes.INTEGER,
			endYear: DataTypes.INTEGER,
			current: DataTypes.BOOLEAN,
			location: DataTypes.STRING,
			description: DataTypes.STRING

		}
		, {
			classMethods: {
				associate: (models)=> {
					Experience.belongsTo(models.User)
				}
			}
		}
	);

	return Experience;
};
