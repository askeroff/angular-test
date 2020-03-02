import { TestBed, async } from '@angular/core/testing';
import { render } from '@testing-library/angular'
import { AppComponent } from './app.component';
import { TaskformComponent } from './taskform/taskform.component';
import { FormsModule } from '@angular/forms';
import { TaskslistComponent } from './taskslist/taskslist.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, TaskformComponent, TaskslistComponent],
      imports: [FormsModule]
    }).compileComponents();
  }));
  
  it("Should add new tasks to the localStorage when clicking submit", async () => {
    const component = await render(AppComponent);
    let taskName = "Task number one";
    component.type(component.getByTestId("newTask"), taskName);
    component.click(component.getByTestId("submit-button"));
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    expect(tasks.length).toBe(1);
    expect(tasks[0].name).toBe(taskName);
    
    expect(component.getByTestId('task-0').textContent.trim()).toBe(taskName);  
  });
});






// describe('AppComponent', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   }));

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'Angular Testing Series'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app.title).toEqual('Angular Testing Series');
//   });

//   it('should render title in a h1 tag', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('h1').textContent).toContain('Angular Testing Series');
//   });
// });
