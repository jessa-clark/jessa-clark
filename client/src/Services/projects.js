import api from "./config"

export const getAllProjects = async () => {
  const res = await api.get("/projects");
  return res.data
};

export const getOneProject = async (id) => {
  const res = await api.get(`/projects/${id}`);
  return res.data
};

export const deleteProject = async (id) => {
  await api.delete(`/projects/${id}`);
};

export const createProject = async (projectData) => {
  const res = await api.post("/projects", { project: projectData });
  return res.data
};

export const updateProject = async (id, projectData) => {
  const res = await api.put(`/projects/${id}`, { project: projectData });
  return res.data
};


