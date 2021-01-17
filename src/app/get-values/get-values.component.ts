import { Component, OnInit } from '@angular/core';
import { AppState } from './../services/app.services';
import { FormBuilder,Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-get-values',
  templateUrl: './get-values.component.html',
  styleUrls: ['./get-values.component.css']
})
export class GetValuesComponent implements OnInit {

  public selectedValue:any;
  public getValueForm:FormGroup;
  

  public submit(){
    if(this.getValueForm.valid){
      switch (this.selectedValue) {
        case "rectangle": 
          let result = this.getValueForm.controls['length'].value * this.getValueForm.controls['height'].value;
          this.services.storeRouteComponentData("result",result);
        break;
        case "circle": 
          let cresult = this.getValueForm.controls['radius'].value * this.getValueForm.controls['radius'].value * 3.14;
          this.services.storeRouteComponentData("result",cresult);
        break;
        case "square": 
          let sresult = this.getValueForm.controls['side'].value * this.getValueForm.controls['side'].value;
          this.services.storeRouteComponentData("result",sresult);
        break;
        case "eclipse": 
          let eresult = this.getValueForm.controls['aradius'].value * this.getValueForm.controls['bradius'].value * 3.14;
          this.services.storeRouteComponentData("result",eresult);
        break;
        
     }
     this.router.navigate(['view-result']);
    }else{
      switch (this.selectedValue) {
        case "rectangle": 
          this.getValueForm.controls['length'].markAsTouched({ onlySelf: true });
          this.getValueForm.controls['height'].markAsTouched({ onlySelf: true });
        break;
        case "circle": 
          this.getValueForm.controls['radius'].markAsTouched({ onlySelf: true });
        break;
        case "square": 
          this.getValueForm.controls['side'].markAsTouched({ onlySelf: true });
        break;
        case "eclipse": 
          this.getValueForm.controls['aradius'].markAsTouched({ onlySelf: true });
          this.getValueForm.controls['bradius'].markAsTouched({ onlySelf: true });
        break;
        
     }
    }
  }

  public setValueForm(){
    switch (this.selectedValue) {
      case "rectangle": 
      this.getValueForm = this.fb.group({
        'length': ['', Validators.required],
        'height': ['', Validators.required],
      });
      break;
      case "circle": 
      this.getValueForm = this.fb.group({
        'radius': ['', Validators.required],
      });
      break;
      case "square": 
      this.getValueForm = this.fb.group({
        'side': ['', Validators.required],
      });
      break;
      case "eclipse": 
      this.getValueForm = this.fb.group({
        'aradius': ['', Validators.required],
        'bradius': ['', Validators.required],
      });
      break;
   }
  }

  constructor(
    public router: Router,
    public services:AppState,
    public fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.selectedValue = this.services.getRouteComponentData("selected-shape");
    this.setValueForm();
  }

}
