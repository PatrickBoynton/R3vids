import sequelize from "../utils/database";
import { INTEGER, STRING, BOOLEAN } from "sequelize";

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
	rating: {
		type: INTEGER,
		allowNull: true,
	},
	type: {
		type: STRING,
		allowNull: true,
	},
	hasPlayed: {
		type: BOOLEAN,
		allowNull: false,
	},
});

export default Video;
