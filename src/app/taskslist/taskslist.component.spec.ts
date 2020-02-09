import { async, TestBed } from "@angular/core/testing";
import { TaskslistComponent } from "./taskslist.component";
import { render } from "@testing-library/angular";
import { ITask } from "../taskform/taskform.component";

describe("TaskslistComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskslistComponent]
    }).compileComponents();
  }));

  it("Should render list of tasks from localStorage", async () => {
    const tasks: Array<ITask> = [
      {
        name: "First task",
        completed: false
      },
      {
        name: "Second task",
        completed: true
      }
    ];
    const component = await render(TaskslistComponent, {
      componentProperties: {
        tasks
      }
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    expect(component.getByTestId("task-0").textContent.trim()).toBe(
      tasks[0].name
    );
  });

  afterEach(() => {
    localStorage.removeItem("tasks");
  });
});
