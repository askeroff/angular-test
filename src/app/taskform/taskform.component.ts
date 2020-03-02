import { Component, OnInit, Output, EventEmitter } from "@angular/core";

export interface ITask {
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
  @Output("newTaskAdded") taskAdded = new EventEmitter<ITask>();

  constructor() {}

  ngOnInit() {}

  submitForm() {
    const newTask = { name: this.taskName, completed: false };
    this.taskAdded.emit(newTask);
    this.taskName = "";
  }
}
