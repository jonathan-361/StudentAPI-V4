import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Grade = sequelize.define("grades", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    course: {
        type: DataTypes.STRING
    },
    score: {
        type: DataTypes.DECIMAL(10,2)
    }
}, {
    timestamps: false
});