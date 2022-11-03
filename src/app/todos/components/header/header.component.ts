import { Component } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  text: string=''
  constructor(private service: TodosService) {   }

  changeText(event: Event){
    const target = event.target as HTMLInputElement;
    this.text=target.value
  }

  addTodo(): void{
    this.service.addTodo(this.text);
    this.text = ''
  }
}
