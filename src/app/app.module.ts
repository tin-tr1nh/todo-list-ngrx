import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputButtonComponent } from './component/input-button/input-button.component';
import { TodoItemComponent } from './component/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    InputButtonComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
