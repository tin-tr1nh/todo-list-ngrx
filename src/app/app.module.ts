import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './component/todo-item/todo-item.component';
import { InputButtonUnitComponent } from './component/input-button-unit/input-button-unit.component';
import { TodoListService } from './todo-list.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    InputButtonUnitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
