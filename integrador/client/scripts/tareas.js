
/**
 * Obtiene las tareas de la base de datos
 * @returns {Array[Object]} - Un listado de tareas
 */
const obtener_tareas = async () => {
  const respuesta = await fetch('http://localhost:3000/', {
    method: 'post'
  })
  const tareas = await respuesta.json()

  return tareas
}

/**
 * Completa la lista <ul> con las tareas obtenidas
 */
// const lista_tareas=document.getElementById("lista-tareas");
// function crearElementos(e){
//   e.preventDefault();
//   const Elemento=document.createElement("li");
//   const infoOne=document.querySelector("#first");
//   const infoTwo=document.querySelector("#second");
//   lista_tareas.appendChild(Elemento);
//   Elemento.textContent=`nombre: ${infoOne.value}, descripcion: ${infoTwo.value}`;
// }
const renderizarTareas = async () => {
  const lista_tareas=document.getElementById("lista-tareas");
  const lista=document.createElement("li");
  const tareas=obtener_tareas();
  tareas.forEach(element => {
    lista.textContent=`nombre: ${tarea.name}, descripcion: ${tarea.description}`;
    lista_tareas.appendChild(lista);
  });
}

// renderizarTareas();
document.querySelector("#botoncito").addEventListener("click",renderizarTareas);