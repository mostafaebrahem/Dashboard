import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { NotesComponent } from './notes/notes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    NotesComponent,
    BookmarkComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
