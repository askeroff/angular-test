import { Component, OnInit, Input } from '@angular/core';
import { ITask } from '../taskform/taskform.component';

@Component({
  selector: 'app-taskslist',
  templateUrl: './taskslist.component.html',
  styleUrls: ['./taskslist.component.css']
})
export class TaskslistComponent implements OnInit {
  @Input() tasks: Array<ITask> = [];
  constructor() { }

  ngOnInit() {
  }

}
