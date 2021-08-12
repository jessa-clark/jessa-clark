import api from './config'

export const getAllComments = async () => {
  const res = await api.get('/comments')
  return res.data;
};

export const getOneComment = async (id) => {
  const res = await api.get(`/comments/${id}`);
  return res.data
};

export const createComment = async (id, commentData) => {
  const res = await api.post(`projects/${id}/comments`, { comment: commentData });
  return res.data
};

export const updateComment = async (projectID, id, commentData) => {
  const res = await api.put(`/projects/${projectID}/comments/${id}`, { comment: commentData });
  return res.data
};

export const deleteComment = async (projectID, id) => {
  await api.delete(`/projects/${projectID}/comments/${id}`);
};

