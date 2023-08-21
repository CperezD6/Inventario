import express  from "express";
const router = express.Router();
import { registrar } from '../controllers/usuarioController.js';

//router.post('/', (req, res)=> {res.send('Desde -POST- API/USUARIOS')});

//Autenticacion, Registro y confirmacion de Usuarios
router.post("/", registrar);


export default router;

