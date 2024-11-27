import {Router} from 'express';
import * as controller from '../controllers/usuarios.controller.js';
import { validateUser, validateLogin} from '../../middleware/usuarios.validate.middleware.js';
import { validateToken } from '../../middleware/token.validate.middleware.js';


const route = Router();

route.post('/usuarios', [validateUser],controller.createUser);
route.post('/usuarios/login', [validateLogin], controller.login);
route.get( "/usuarios",[validateToken], controller.getUser )

export default route;
