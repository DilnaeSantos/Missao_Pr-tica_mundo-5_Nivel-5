const users = [
  { username: 'user', password: '123456', id: 123, email: 'user@dominio.com', perfil: 'user' },
  { username: 'admin', password: '123456789', id: 124, email: 'admin@dominio.com', perfil: 'admin' },
  { username: 'colab', password: '123', id: 125, email: 'colab@dominio.com', perfil: 'user' },
];

function findUserByCredentials(username, password) {
  return users.find(user => user.username === username && user.password === password);
}

function findUserById(id) {
  return users.find(user => user.id === id);
}

function getAllUsers() {
  return users;
}

module.exports = {
  findUserByCredentials,
  findUserById,
  getAllUsers
};