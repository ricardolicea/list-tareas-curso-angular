import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  // constructor() { }

  private localStorageKey = 'listaTareas';
  getTareas(): string[]{
    return JSON.parse(localStorage.getItem(this.localStorageKey) as string) || []
  }

  agregaTareas(tarea: string){
    const tareas = this.getTareas();
    tareas.push(tarea);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas));
  }

  eliminarTareas(index: number){
    const tareas = this.getTareas();
    tareas.splice(index, 1);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas));
  }
}
