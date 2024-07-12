const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

// Middleware Setup
app.use(express.json());
app.use(cors())

// Rutas
const taskRoutes = require('./routes/taskRoutes');
app.use('/', taskRoutes);

app.listen(port, () => {
  console.log(`La tarea está funcionando en http://localhost:${port}`)
});