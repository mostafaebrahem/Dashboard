import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { MainComponent } from './main/main.component';
import { NotesComponent } from './notes/notes.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'notes',component:NotesComponent},
  {path:'bookmark',component:BookmarkComponent},
  {path:'**',component:MainComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
