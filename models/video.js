const sequelize = require("../utils/database");
const { INTEGER, STRING, BOOLEAN } = require("sequelize");

const Video = sequelize.define("video", {
	id: {
		type: INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false,
	},
	path: {
		type: STRING,
		allowNull: false,
	},
	hasPlayed: {
		type: BOOLEAN,
		allowNull: false,
	},
});

module.exports = Video;
