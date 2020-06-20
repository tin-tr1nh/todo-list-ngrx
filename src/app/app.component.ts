import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngrx-todo-list';

  todoList = [
    {
      id: 1,
      title: 'Do home work',
    },
    {
      id: 2,
      title: 'Do home work 2',
    },
  ];
}
