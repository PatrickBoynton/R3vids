import sequelize from "../utils/database";
import { DataTypes } from "sequelize";
import Type from "./Type";
const Video = sequelize.define("video", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false,
	},
	path: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	rating: {
		type: DataTypes.INTEGER,
		allowNull: true,
	},
	hasPlayed: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
	},
	videoPlayTime: {
		type: DataTypes.TIME,
		allowNull: false
	},
	videoType: {
		type: DataTypes.ENUM("POV", "J", "K", "H", "SS", "SH", "HY", "B", "JOI", "O")
	}
});

Type.hasMany(Video);

export default Video;
