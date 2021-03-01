import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsEditComponent } from './items/items-edit/items-edit.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemsComponent } from './items/items.component';
import { MainComponent } from './shared/components/main/main.component';

const routes: Routes = [
  {
    path:'',
    component: MainComponent
  },
  {
    path:'items',
    component: ItemsComponent,
    children: [
      {
        path: '',
        component: ItemsListComponent,
      },
      {
        path: 'edit',
        component: ItemsEditComponent,
      },
      {
        path: 'edit/:id',
        component: ItemsEditComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
