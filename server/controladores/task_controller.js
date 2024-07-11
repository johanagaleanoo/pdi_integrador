const task_model= require ("../models/task.js");

const task_controller= {
    // todas las tareas de la base de datos
    all_tasks: async (req, res) => {
        try {
            const taks= await task_model.findAll ();

            return res.status (200).json (taks);
        }
        catch (error){
            console.log (error);

            return res.status (500).json ({ mensaje: "error obteniendo todas" });
        }
    },

    // tareas por id
    id_task: (req, res) => {
        try {
            const id_task= req.params.id;
            const query= "select * from Task where id= ?";
        } 
        catch (error) {
            console.log (error);

            return res.status (500).json ({ mensaje: "error al buscar" })
        }
    },

    // crear una tarea
    create_task: async (req, res) => {
        try {
            return res.status (200).json (task);
        }
        catch (error){
            console.log (error);

            return res.status (500).json ({ mensaje: "error al crear" });
        }
    },

    // actualizar una tarea
    update_task: (req, res) => {
        try {
            const { id }= req.params;
            const { name, description }= req.body;
            const query= "update Task set name= ?, description= ? where id= ?";
        }
        catch (error){
            console.log (error);

            return res.status (500).json ({ mensaje: "error al actualizar"})
        }
    },

    // actualizar el estado "completed" de una tarea a true / false respectivamente
    complete_task: (req, res) => {
        try {
            const { id }= req.params;
            const { completed }= req.body;
            const consulta= "update Task set completed= ? where id= ?";
        }
        catch (error){
            console.log (error);

            return res.status (500).json ({ mensaje: "complete la tarea" });
        }
    },

    // eliminar una tarea
    delete_task: (req, res) => {
        try {
            const { id }= req.params;
            const consulta= "delete from integrador where id= ?";
            const eliminar= promiseQuery (query, [name, description, completed]);
        }
        catch (error){
            console.log (error);

            return res.status (500).json ({ mensaje: "tarea eliminada" });
        }
    }
}

module.exports= task_controller;