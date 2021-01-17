import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddShapeComponent } from './add-shape/add-shape.component';
import { SelectShapeComponent } from './select-shape/select-shape.component';
import { GetValuesComponent } from './get-values/get-values.component';
import { ViewResultComponent } from './view-result/view-result.component';


const routes: Routes = [
  { path: 'add-shape', component: AddShapeComponent },
  { path: 'get-value', component: GetValuesComponent },
  { path: 'view-result', component: ViewResultComponent },
  { path: '', component: SelectShapeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
