import { Component, OnInit } from '@angular/core';
import { v4 } from 'uuid';
import { TodoItem } from './models/todo-item';
import { TodoListService } from './todo-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todoList: TodoItem[];
  onReceiveNewItem(newItemText: string) {
    if (newItemText.trim().length == 0) {
      return;
    }
    this.todoListService.addTodo({
      id: v4(),
      title: newItemText,
    });

    this.todoList = this.todoListService.getTodoList();
  }

  title = 'Todo list demo';

  constructor(private todoListService: TodoListService) {}

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  handleDeleteItem(id: string) {
    this.todoListService.deleteTodo(id);

    // when you load the data, the view when be rebuild
    this.todoList = this.todoListService.getTodoList();
  }

  handleChangeStatusItem(id: string) {
    this.todoListService.toggleItemStatus(id)
    this.todoList = this.todoListService.getTodoList()
  }
}
