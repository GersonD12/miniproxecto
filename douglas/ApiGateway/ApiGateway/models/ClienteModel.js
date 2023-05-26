// importar la conexion
import db from "../database/db.js";

// importar sequelize
import { DataTypes } from "sequelize";

const ClienteModel =  db.define('clientes',{
    nombre:{type: DataTypes.STRING},
    correo:{type: DataTypes.STRING},
    telefono:{type: DataTypes.STRING},
    direccion:{type: DataTypes.STRING},
});

export default ClienteModel;