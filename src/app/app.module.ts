import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddShapeComponent } from './add-shape/add-shape.component';
import { SelectShapeComponent } from './select-shape/select-shape.component';
import { AppState } from './services/app.services';
import { GetValuesComponent } from './get-values/get-values.component';
import { ViewResultComponent } from './view-result/view-result.component';


@NgModule({
  declarations: [
    AppComponent,
    AddShapeComponent,
    SelectShapeComponent,
    GetValuesComponent,
    ViewResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AppState
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
