import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos!: Todo[];
  inputTodo:string=''

  constructor() { }

  ngOnInit(): void {

    this.todos = [
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: false
      }
    ]
  }

  deleteTodo(index: any){
    //this.todos.splice(index,1);
    this.todos = this.todos.filter((v, i )=> i!== index)
  }

  toggleDone(id: any){
    this.todos.map((v, i)=>{
      if(i == id) v.completed = !v.completed
      return v
    })
  }

  addTodo(){
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })
  }

}
