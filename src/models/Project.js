//tipos de datos de la dependencia de sequelize
import { DataTypes } from "sequelize";
//traer la constante de sequelize que tiene la info de la base de datos
import { sequelize } from "../database/database.js";
import { Task } from "./Task.js";

export const Project = sequelize.define("projects", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  priority: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


//relaciones de las tablas
Project.hasMany(Task, { foreignKey: "projectId", sourceKey: "id" });
Task.belongsTo(Project, { foreignKey: "projectId", targetKey: "id" });
