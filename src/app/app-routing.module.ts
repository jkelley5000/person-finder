import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'persons' },
  { path: 'persons', component: ListComponent },
  // { path: 'persons', loadChildren: () => import('./list/list.component') },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
