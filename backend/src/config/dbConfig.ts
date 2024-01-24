import { Sequelize } from 'sequelize';

const dbConfig = new Sequelize({
    host: "localhost",
    port: 5432,
    database: "crud",
    username: "heri",
    password: "Heriberto1995**",
    dialect: "postgres",
    logging: false
});

const dbAuth = ()=>{
    try {
        dbConfig.authenticate();
        console.log("Se estableció conexión con base de datos");
    } catch(err){
        console.error("No se establecio conexion con la base de datos:", err);
    }
};

dbAuth();

export default dbConfig;