import TareaRepository from "../repository/TareaRepository.mjs";
import Tarea from "../models/tarea.mjs";

const tareaRepo = new TareaRepository();

//servicio para obtener todas las tareas
export function listarTareas() {
  return tareaRepo.obtenerTodas();
}

//servicio para obtener solo las tareas completadas
export function listarTareasCompletadas() {
  const tareas = tareaRepo.obtenerTodas();
  return tareas.filter((tarea) => tarea.completado);
}

//servicio para crear una nueva tarea
export function crearTarea(id, titulo, descripcion, completado = false) {
  const tareas = tareaRepo.obtenerTodas();
  const nuevaTarea = new Tarea(id, titulo, descripcion, completado);
  nuevaTarea.validar();
  tareas.push(nuevaTarea);
  tareaRepo.guardar(tareas);
}

//servicio para marcar una tarea como completada
export function completarTarea(id) {
  const tareas = tareaRepo.obtenerTodas();
  const tarea = tareas.find((tarea) => tarea.id === id);
  if (tarea) {
    tarea.completar();
    tareaRepo.guardar(tareas);
  }
}

//servicio para eliminar una tarea
export function eliminarTarea(id) {
  let tareas = tareaRepo.obtenerTodas();
  tareas = tareas.filter((tarea) => tarea.id !== id);
  tareaRepo.guardar(tareas);
}
