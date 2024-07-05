const { DataTypes } = require('sequelize');
const db = require('../config/data_base.js');

/**
 * Modelo de las tareas que se almacenan en la base de datos.
 * @property {number} id - El ID de la tarea.
 * @property {string} name - El título de la tarea.
 * @property {string} description - La descripción de la tarea.
 * @property {boolean} completed - Estado de la tarea.
 */
const Task = db.define('Task', {
  id:{
    type:DataTypes.INTEGER,
    required: true,
    validate:{
        isNaN:false
    }
  },
  name: {
    type: DataTypes.STRING,
    required: true,
    validate: {
        isString: true,
    }
  },
  description: {
    type: DataTypes.STRING,
    required: true,
    validate: {
        isString: true,
    }
  },
  completed: {
    type: DataTypes.BOOLEAN,
    default: false
  }
}, {
  timestamps: false
})

Task.sync();

module.exports = Task;
