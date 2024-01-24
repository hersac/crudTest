import { Request, Response } from "express";
import Task from "../models/TaksModel";

const getTasks = async (req: Request, res: Response)=>{
	try {
		const taskDB = await Task.findAll();
		res.status(200).json(taskDB);
	} catch (err) {
		res.status(400).json({
			message: "Ha ocurrido un error",
			err
		});
	}
};
const getTaskById = async (req: Request, res: Response)=>{
    const id = req.params.id;
	try {
		const taskDB = await Task.findByPk(id);

        if(!taskDB){
            res.status(400).json({
                message: "Tarea no encontrada",
            });
        } else {
            res.status(200).json(taskDB);
        }
	} catch (err) {
		res.status(400).json({
			message: "Ha ocurrido un error al buscar el elemento",
			err
		});
	}
};

const createTasks = async (req: Request, res: Response)=>{
    const body = req.body;
	console.log(body);
	try {
		const taskDB = await Task.create(body);
		res.status(200).json(taskDB);
	} catch (err) {
		res.status(400).json({
			message: "Ha ocurrido un error al crear la tarea",
			err
		});
	}
};

const updateTasks = async (req: Request, res: Response)=>{
    const id = req.params.id;
    const body = req.body;
	try {
		const taskDB = await Task.findByPk(id);
        if(!taskDB){
            res.status(400).json({
                message: "Tarea no encontrada",
            });
        } else {
            taskDB?.update(body);
            res.status(200).json(taskDB);
        }
	} catch (err) {
		res.status(400).json({
			message: "Ha ocurrido un error",
			err
		});
	}
};

const deleteTaskById = async (req: Request, res: Response)=>{
    const id = req.params.id;
	try {
		const taskDB = await Task.findByPk(id);

        if(!taskDB){
            res.status(400).json({
                message: "Tarea no encontrada",
            });
        } else {
            taskDB.destroy();
            res.status(200).json({
                message: "Se ha elimnado la tarea correctamente"
            });
        }
	} catch (err) {
		res.status(400).json({
			message: "Ha ocurrido un error",
			err
		});
	}
};


export default {
    getTasks,
	getTaskById,
	createTasks,
	updateTasks,
	deleteTaskById
}