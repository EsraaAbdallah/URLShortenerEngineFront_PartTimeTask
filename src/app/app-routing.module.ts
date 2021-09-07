import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFormComponent } from './add-form/add-form.component';

const routes: Routes = [
  {path: 'List', component: AppComponent},
  {path: 'addForm', component: AddFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
