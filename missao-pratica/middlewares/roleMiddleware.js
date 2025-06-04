function roleMiddleware(requiredRole) {
  return (req, res, next) => {
    if (!req.user || req.user.perfil !== requiredRole) {
      return res.status(403).json({ message: 'Acesso negado: permissão insuficiente.' });
    }
    next();
  };
}

module.exports = roleMiddleware;
