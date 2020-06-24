import { Injectable } from '@angular/core';
import { TodoItem } from './models/todo-item';
import { StorageService } from './todo-list/storage.service';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  private readonly TodoListKey = 'TodoList';

  private initTodoList: TodoItem[] = [
    {
      title: 'Init',
      id: '123',
    },
  ];

  private currentTodoList: TodoItem[];

  constructor(private storageService: StorageService) {
    this.currentTodoList =
      this.storageService.getData(this.TodoListKey) || this.initTodoList;
      console.log(this.currentTodoList);
  }

  getTodoList(): TodoItem[] {
    return this.currentTodoList;
  }

  addTodo(item: TodoItem) {
    this.currentTodoList.push(item);
    this.storageService.setData(this.TodoListKey, this.currentTodoList);
  }

  deleteTodo(id: string) {
    this.currentTodoList = this.currentTodoList.filter((value) => value.id != id);
    this.storageService.setData(this.TodoListKey, this.currentTodoList);
  }
}
