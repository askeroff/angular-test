import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskslist',
  templateUrl: './taskslist.component.html',
  styleUrls: ['./taskslist.component.css']
})
export class TaskslistComponent implements OnInit {
  tasks: Array<{ done: boolean; name: string }> = [];
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  }

  ngOnInit() {}
}
