import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent implements OnInit {
  taskName: string;
  constructor() {}

  ngOnInit() {}

  submitForm() {
    console.log(this.taskName);
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.push({ name: this.taskName || 'hey hey', done: false });

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}
