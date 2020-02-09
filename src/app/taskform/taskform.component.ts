import { Component, OnInit } from "@angular/core";

export interface ITask{
  name: string;
  completed: boolean;
}

@Component({
  selector: "app-taskform",
  templateUrl: "./taskform.component.html",
  styleUrls: ["./taskform.component.css"]
})
export class TaskformComponent implements OnInit {
  taskName: string;
  constructor() {}

  ngOnInit() {}

  submitForm() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const newTask = { name: this.taskName, completed: false };
    tasks.push(newTask);
    this.taskName = "";
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}
