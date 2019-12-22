import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-taskform",
  templateUrl: "./taskform.component.html",
  styleUrls: ["./taskform.component.css"]
})
export class TaskformComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  submitForm(taskName) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const newTask = { name: taskName, completed: false };
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}
