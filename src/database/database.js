import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "school",
  "postgres",
  "12345", 
  {
    host: "localhost",
    dialect: "postgres",
  }
);
