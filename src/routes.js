import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import PlanController from './app/controllers/PlanController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'hello world' });
});

routes.get('/users', UserController.index);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware); // somente as rotas que vem depois usam esse middleware
routes.put('/users', UserController.update);
routes.get('/students', StudentController.index);
routes.post('/students', StudentController.store);
routes.put('/students/', StudentController.update);
routes.get('/plans', PlanController.index);
routes.post('/plans', PlanController.store);
routes.put('/plans/:id', PlanController.update);
routes.delete('/plans/:id', PlanController.delete);

export default routes;
