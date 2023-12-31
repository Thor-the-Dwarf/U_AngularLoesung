import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() task: string = "programmieren";
  @Input() done: boolean = false;
  @Output() checkBoxClicked = new EventEmitter<boolean>();
  @Output() deleteClicked = new EventEmitter<void>();

  sendDone(){
    this.checkBoxClicked.emit(this.done)
  }
  sendDelete(){
    this.deleteClicked.emit()
  }
}
