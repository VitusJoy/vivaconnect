import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray,FormControl } from '@angular/forms';
import { AppState } from './../services/app.services';
import { Router } from '@angular/router';



@Component({
  selector: 'app-select-shape',
  templateUrl: './select-shape.component.html',
  styleUrls: ['./select-shape.component.css']
})
export class SelectShapeComponent implements OnInit {

  public shapeListForm = new FormArray([]);
  public selectedValue:any = "rectangle";
  public shapeList:any = [];

  public onChange(value){
  }

  
  public submit(){
    let sel = this.shapeList.find(Item => Item.value === this.selectedValue);
    this.services.storeRouteComponentData("selected-shape",sel.value);
    this.router.navigate(['get-value']);
  }

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public services:AppState
  ) { }


  ngOnInit(): void {
    this.shapeList.push(
      {
        "value":"rectangle",
        "name":"Rectangle",
        "checked":true
      });
    this.shapeList.push(
      {
        "value":"circle",
        "name":"Circle",
        "checked":false
      });
    this.shapeList.push(
      {
        "value":"square",
        "name":"Square",
        "checked":false
      });
    this.shapeList.push(
      {
        "value":"eclipse",
        "name":"Eclipse",
        "checked":false
      });
    console.log(this.shapeList);
  }

}
