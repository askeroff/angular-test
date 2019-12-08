import { async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import {render} from '@testing-library/angular';

import { TaskformComponent } from './taskform.component';

describe('TaskformComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskformComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));


  it('Input should have the value we typed into', async () => {
    const component = await render(TaskformComponent);
    let taskName = 'Task number one';
    component.type(component.getByTestId('newTask'), taskName);
    expect((component.getByTestId('newTask') as HTMLInputElement).value).toBe(taskName);
  });
});
