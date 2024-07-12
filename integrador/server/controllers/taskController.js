const task_model=require("../models/Task");
const promiseQuery= require ('../config/database');
const task_controller= {
    // todas las tareas de la base de datos
    all_tasks: async (req, res) => {
        try {
            const allTasks= await task_model.findAll ();

            return res.status (200).json (allTasks);
        }
        catch (error){
            console.log (error);

            return res.status (500).json ({ mensaje: "error obteniendo todas" });
        }
    },

    // tareas por id
    id_task: async(req, res) => {
        try {
            const { id }= req.params;
            // const query= "select * from Task where id= ?";
            // const especific=await promiseQuery (query,id);
            // res.json (especific);
            const task= await task_model.findOne({ where: { id:id } });

            return res.status (200).json (task);
        } 
        catch (error) {
            console.log (error);

            return res.status (500).json ({ mensaje: "error al buscar" })
        }
    },

    // crear una tarea
    create_task: async (req, res) => {
        try {
          const { name, description }= req.body;
          const crear=await task_model.create({name:name,description:description,completed:0});
          res.json (crear);
        }
        catch (error){
            console.log (error);

            return res.status (500).json ({ mensaje: "error al crear" });
        }
    },

    // actualizar una tarea
    update_task: async(req, res) => {
        try {
            const { id }= req.params;
            const { name, description }= req.body;
            const actualizar=await task_model.update(
              { name:name,description:description},
              {
                where: {
                  id:id,
                },
              },
            );
            res.json (actualizar);
        }
        catch (error){
            console.log (error);

            return res.status (500).json ({ mensaje: "error al actualizar"})
        }
    },

    // actualizar el estado "completed" de una tarea a true / false respectivamente
    complete_task: async(req, res) => {
        try {
            const { id }= req.params;
            const { completed }= req.body;
            const consulta= "update Task set completed= ? where id= ?";
            const completar=await promiseQuery (consulta, [completed,id]);
            res.json (completar);
        }
        catch (error){
            console.log (error);

            return res.status (500).json ({ mensaje: "complete la tarea" });
        }
    },

    // eliminar una tarea
    delete_task: async(req, res) => {
        try {
            const { id }= req.params;
            // const eliminar=await promiseQuery (consulta, id);
            const eliminar=await task_model.destroy({
              where: {
                id,
              },
            });
            res.json (eliminar);
        }
        catch (error){
            console.log (error);

            return res.status (500).json ({ mensaje: "tarea eliminada" });
        }
    }
}

module.exports= task_controller;