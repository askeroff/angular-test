import { Component, OnInit } from "@angular/core";

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
