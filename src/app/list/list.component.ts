import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  newTodo: string = '';
  offeneTodos: number = 0;

  data = [
    {task: "HTML", done: true},
    {task: "CSS", done: true},
    {task: "JavaScript", done: true},
    {task: "Angular", done: false}
  ];

  constructor() {this.countOffeneTodos()}

  countOffeneTodos(){
    let counter: number = 0;
    for(let item of this.data){
      if( ! item.done){
        counter++;
      }
    }
    this.offeneTodos = counter;
  }

  addTodo(){
    if( this.newTodo.trim() != ''){
      this.data.push({task: this.newTodo, done: false});
      this.countOffeneTodos();
      this.newTodo = '';
    }
  }

}
