import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Grade } from "./Grade.js";

export const Student = sequelize.define("students", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING
    },
}, {
    timestamps: false
});

Student.hasMany(Grade, {
    primaryKey: "studentId",
    sourceKey: "id"
});

Grade.belongsTo(Student,{
    foreignKey: "studentId",
    targedId: "id"
});