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

  it('Delete button should delete the associated task', async () => {
    const tasks = [
      {
        name: 'First task',
        done: true
      },
      {
        name: 'Second task!!',
        done: false
      },
      {
        name: 'Third task!!',
        done: false
      }
    ];
    localStorage.setItem('tasks', JSON.stringify(tasks));
    const { getByTestId, click, getAllByTestId } = await render(
      TaskslistComponent,
      {
        componentProperties: {
          tasks
        }
      }
    );

    click(getByTestId('delete-0'));

    expect(getAllByTestId('item').length).toBe(2);
    const newTasks = JSON.parse(localStorage.getItem('tasks'));
    expect(newTasks.length).toBe(2);
  });

  afterEach(() => {
    localStorage.removeItem('tasks');
  });
});
