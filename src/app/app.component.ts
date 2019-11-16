import { Component } from '@angular/core';

export interface ITask {
  name: string;
  done: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo App';
  tasks: Array<ITask> = JSON.parse(localStorage.getItem('tasks')) || [];

  updateTasks() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  }
}
