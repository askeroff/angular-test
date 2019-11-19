import { Component, OnInit, Input } from '@angular/core';
import { ITask } from '../app.component';

@Component({
  selector: 'app-taskslist',
  templateUrl: './taskslist.component.html',
  styleUrls: ['./taskslist.component.css']
})
export class TaskslistComponent implements OnInit {
  @Input('tasks') tasks: Array<ITask>;

  constructor() {}

  ngOnInit() {}

  deleteTask(i) {
    this.tasks = this.tasks.filter((item, index) => index !== i);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
