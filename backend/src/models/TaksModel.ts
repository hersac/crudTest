import { DataTypes } from "sequelize";
import dbConfig from "../config/dbConfig";

const Task = dbConfig.define("task", {
    idTask: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    finalDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});

Task.sync();

export default Task;