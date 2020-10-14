import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/multer';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

//POST
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

//GET
routes.get('/orphanages', OrphanagesController.index);
routes.post('/orphanages/:id', OrphanagesController.show);

export default routes;

