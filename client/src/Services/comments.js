import api from './config'

export const getAllComments = async (projectID) => {
  const res = await api.get(`/projects/${projectID}/comments`)
  return res.data;
};

export const getOneComment = async (projectID, id) => {
  const res = await api.get(`projects/${projectID}/comments/${id}`);
  return res.data
};

export const createComment = async (projectID, commentData) => {
  const res = await api.post(`projects/${projectID}/comments`, { comment: commentData });
  return res.data
};

export const updateComment = async (projectID, id, commentData) => {
  const res = await api.put(`/projects/${projectID}/comments/${id}`, { comment: commentData });
  return res.data
};

export const deleteComment = async (projectID, id) => {
  await api.delete(`/projects/${projectID}/comments/${id}`);
};

