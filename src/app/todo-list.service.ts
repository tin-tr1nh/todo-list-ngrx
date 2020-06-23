import { Injectable } from '@angular/core';
import { TodoItem } from './models/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private initTodoList: TodoItem[] = [
    {
      title: "Init",
      id: "123"
    },
  ]

  constructor() { }

  getTodoList(): TodoItem[] {
    return this.initTodoList;
  }
}
