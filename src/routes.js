import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'hello world' });
});

routes.get('/users', UserController.index);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware); // somente as rotas que vem depois usam esse middleware
routes.put('/users', UserController.update);

export default routes;
