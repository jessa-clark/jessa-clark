import api from './config';

export const login = async (loginData) => {
	const res = await api.post('/users/login', { user: loginData });
	localStorage.setItem('authToken', res.data.token);
	api.defaults.headers.common.authorization = `Bearer ${res.data.token}`;
	return res.data.user;
};

export const register = async (registerData) => {
	const res = await api.post('/users', { user: registerData });
  const {token} = res.data
  if (token) {
    localStorage.setItem('authToken', res.data.token);
    api.defaults.headers.common.authorization = `Bearer ${res.data.token}`;
    return res.data.user;
  }
};

export const verify = async () => {
	const token = localStorage.getItem('authToken');
	if (token) {
		api.defaults.headers.common.authorization = `Bearer ${token}`;
		const res = await api.get('/users/verify');
		return res.data;
	};
  return false;
};


export const logout = () => {
  localStorage.removeItem('authToken')
	api.defaults.headers.common.authorization = null;
};