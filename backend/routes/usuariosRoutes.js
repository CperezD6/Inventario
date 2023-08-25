import express  from "express";
const router = express.Router();
import { registrar, autenticar,confirmar, olvidePassword, comprobarToken, nuevoPassword } from '../controllers/usuarioController.js';

//router.post('/', (req, res)=> {res.send('Desde -POST- API/USUARIOS')});

//Autenticacion, Registro y confirmacion de Usuarios
router.post("/", registrar);
router.post("/login", autenticar);
router.get("/confirmar/:token", confirmar);
router.post("/olvide-password", olvidePassword);
router.get("/olvide-password/:token", comprobarToken);
router.post("/olvide-password/:token", nuevoPassword);


export default router;


