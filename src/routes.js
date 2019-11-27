import { Router } from 'express'; // uma forma de importar só o Router e não o express inteiro

import StudentController from './app/controllers/StudentController';
import CompanyController from './app/controllers/CompanyController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router(); // declarando a variável passando o Router que foi declarado logo acima

routes.get('/students', StudentController.findAll);
routes.post('/student', StudentController.store);

routes.get('/companys', CompanyController.findAll);
routes.post('/company', CompanyController.store);

routes.use(authMiddleware);

export default routes; // exportar para fora as rotas
