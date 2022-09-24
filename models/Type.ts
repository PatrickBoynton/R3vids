import sequelize from "../utils/database";
import { DataTypes } from "sequelize";
import Video from "./video";

const Type = sequelize.define("types", {
    type: {
        type: DataTypes.STRING,
        notNull: true
    }
});

export default Type