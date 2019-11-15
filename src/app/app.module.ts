import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskformComponent } from './taskform/taskform.component';
import { TaskslistComponent } from './taskslist/taskslist.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskformComponent,
    TaskslistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
