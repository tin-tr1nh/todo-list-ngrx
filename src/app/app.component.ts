import { Component } from '@angular/core';
import { v4 } from 'uuid';
import { TodoItem } from './models/todo-item';
import { TodoListService } from './todo-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  onReceiveNewItem(newItemText: string) {
    this.todoList.push({
      id: v4(),
      title: newItemText,
    })
  }

  title = 'Todo list demo';

  constructor(private todoListService: TodoListService) {}

  todoList: TodoItem[] = this.todoListService.getTodoList();
}
