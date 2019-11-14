import { TestBed, async } from '@angular/core/testing';
import { render } from '@testing-library/angular';
import { FormsModule } from '@angular/forms';

import { TaskformComponent } from './taskform.component';

describe('TaskformComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskformComponent],
      imports: [FormsModule]
    }).compileComponents();
  }));

  it('Should add new task to localStorage on submit', async () => {
    const { getByTestId, click, type } = await render(TaskformComponent);
    const newTaskName = 'New Task';
    type(getByTestId('name'), newTaskName);
    click(getByTestId('submit'));
    const items = JSON.parse(localStorage.getItem('tasks'));
    expect(items.length).toBe(1);
    expect(items[0].name).toBe(newTaskName);
  });

  afterEach(() => {
    localStorage.removeItem('tasks');
  });
});
