import express from "express";
import taskController from "../controllers/TaskController";

const router = express.Router();

router.get("/task", taskController.getTasks);
router.get("/task/:id", taskController.getTaskById);
router.post("/task", taskController.createTasks);
router.put("/task/:id", taskController.updateTasks);
router.delete("/task/:id", taskController.deleteTaskById);

export default router;