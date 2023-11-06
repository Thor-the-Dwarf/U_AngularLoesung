import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  newTodo: string = '';
  offeneTodos: number = 0;

  countOffeneTodos(){
    this.offeneTodos++;
  }

}
