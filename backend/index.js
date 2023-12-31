//Sintansis de comond js
//const express = require("express");
//sintasis de modulos
import express from "express";
import dotenv from "dotenv"
import conectarDB from "./config/db.js"
import usuarioRoutes from "./routes/usuariosRoutes.js"

const app = express();
app.use(express.json());
dotenv.config();
conectarDB(); 

//Routing
app.use("/api/usuarios", usuarioRoutes);


const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`servidor corriendo en el puerto  ${PORT}`);
})