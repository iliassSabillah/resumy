"use strict";

module.exports = (sequelize, DataTypes)=> {
	const Education = sequelize.define("Education", {
			school: DataTypes.STRING,
			startYear: DataTypes.INTEGER,
			endYear: DataTypes.INTEGER,
			current: DataTypes.BOOLEAN,
			achievements: DataTypes.STRING

		}
		, {
			classMethods: {
				associate: (models)=> {
					Education.belongsTo(models.User)
				}
			}
		}
	);

	return Education;
};
