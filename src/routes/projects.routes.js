import { Router } from "express";
import {
  getProjects,
  createProjects,
  updateproyect,
  deleteproyect,
  getProject,
  getProjectTasks,
} from "../controllers/projects.controller.js";

const router = Router();

router.get("/projects", getProjects);
router.post("/projects", createProjects);
router.put("/projects/:id", updateproyect);
router.delete("/projects/:id", deleteproyect);
router.get("/projects/:id", getProject);

//ruta de la relacion de tablas

router.get("/projects/:id/tasks", getProjectTasks);

export default router;
