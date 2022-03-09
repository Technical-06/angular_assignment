import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { PostTableComponent } from './post-table/post-table.component';



const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'post-table', component: PostTableComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FormComponent]
