const isAuthenticated = (state) => localStorage.getItem('token');

export default isAuthenticated;