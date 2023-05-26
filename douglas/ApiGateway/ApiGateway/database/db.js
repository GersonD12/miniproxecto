import { Sequelize } from "sequelize";

const db = new Sequelize('microservicioa','root','',{ host:
'localhost',dialect:'mysql'})

export default db