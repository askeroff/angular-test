import { Component } from "@angular/core";
import { ITask } from "./taskform/taskform.component";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Todo App";
  tasks: Array<ITask> = JSON.parse(localStorage.getItem("tasks")) || [];
  
  addNewTask(newTask) {
    this.tasks = [...this.tasks, newTask];
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}
