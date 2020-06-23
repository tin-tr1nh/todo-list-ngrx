import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  text: string = '';
  @Input("buttonName") buttonName: string;
  @Output("submitText") eventEmitter: EventEmitter<string> = new EventEmitter();

  onSubmit() {
    this.eventEmitter.emit(this.text);
    this.text = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
