import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from 'src/app/models/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output('onDelete') onDeleteEmitter: EventEmitter<string> = new EventEmitter()
  @Output('onChangeStatus') onChangeStatusEmitter: EventEmitter<string> = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    this.onDeleteEmitter.emit(this.item.id)
  }

  onIsDoneChange() {
    console.log(this.item.completed)
    this.onChangeStatusEmitter.emit(this.item.id)
  }
}
