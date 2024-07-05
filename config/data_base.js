const { Sequelize }= require ("sequelize");
const task= require ("../models/task");

const data_base= new Sequelize ("integrador", "root", "root", {
    host: '127.0.0.1',
    dialect: 'mysql'
});

// probar la conexion a la base de datos
(async () => {
    try {
        await data_base.authenticate ();
        console.log ("conectado");
    }
    catch (error){
        console.error ("error en la conexion: ", error);
    }
})