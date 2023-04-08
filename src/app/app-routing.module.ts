import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableDataComponent } from './components/table-data/table-data.component';
import { AddDataComponent } from './components/add-data/add-data.component';

const routes: Routes = [
  { path: '', component: TableDataComponent },
  { path: 'add', component: AddDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
