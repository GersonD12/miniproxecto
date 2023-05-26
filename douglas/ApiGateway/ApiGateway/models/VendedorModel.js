// importar la conexion
import db from "../database/db.js";

// importar sequelize
import { DataTypes } from "sequelize";

const VendedorModel =  db.define('vendedor',{
    nombre:{type: DataTypes.STRING},
    correo:{type: DataTypes.STRING},
    telefono:{type: DataTypes.STRING},
    direccion:{type: DataTypes.STRING},
    salario:{type: DataTypes.NUMBER},
});

export default VendedorModel;