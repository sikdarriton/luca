import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LucaFormComponent } from './luca-form/luca-form.component';
import { LucaListComponent } from './luca-list/luca-list.component';

const routes: Routes = [
  { path: 'form', component: LucaFormComponent },
  { path: 'list', component: LucaListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }