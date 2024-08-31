import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  // {
  //   path: '',
  //   children: [
  //     {
  //       path: ':id',
  //       component: ProjectViewComponent,
  //     },
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
