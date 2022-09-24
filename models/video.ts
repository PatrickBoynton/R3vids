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
});

Type.hasMany(Video);

export default Video;
