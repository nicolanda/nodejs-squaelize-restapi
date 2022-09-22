import { Project } from "../models/Project.js";
import { Task } from "../models/Task.js";

const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findOne({
      where: { id },
    });
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createProjects = async (req, res) => {
  const { name, priority, description } = req.body;

  try {
    const newProyect = await Project.create({
      name,
      description,
      priority,
    });
    res.json(newProyect);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateproyect = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, priority, description } = req.body;

    const project = await Project.findByPk(id);
    project.name = name;
    project.priority = priority;
    project.description = description;
    await project.save();

    res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteproyect = async (req, res) => {
  try {
    const { id } = req.params;
    await Project.destroy({
      where: { id },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// relacion
const getProjectTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const tasks = await Task.findAll({
      where: { projectId: id },
    });
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export {
  getProjects,
  getProject,
  createProjects,
  updateproyect,
  deleteproyect,
  getProjectTasks,
};
