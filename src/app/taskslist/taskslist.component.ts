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
}
