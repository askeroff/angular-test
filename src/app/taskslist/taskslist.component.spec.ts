import { async, TestBed } from '@angular/core/testing';
import { render } from '@testing-library/angular';

import { TaskslistComponent } from './taskslist.component';

describe('TaskslistComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskslistComponent]
    }).compileComponents();
  }));

  it('lists the tasks from localStorage', async () => {
    const tasks = [
      {
        name: 'First task',
        done: true
      },
      {
        name: 'Second task!!',
        done: false
      }
    ];
    localStorage.setItem('tasks', JSON.stringify(tasks));
    const { getByTestId } = await render(TaskslistComponent, {
      componentProperties: {
        tasks
      }
    });
    expect(getByTestId('task-0').textContent).toBe('First task');
    expect(getByTestId('task-1').textContent).toBe('Second task!!');
  });

  afterEach(() => {
    localStorage.removeItem('tasks');
  });
});
