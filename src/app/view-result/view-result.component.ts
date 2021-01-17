import { Component, OnInit } from '@angular/core';
import { AppState } from './../services/app.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.css']
})
export class ViewResultComponent implements OnInit {

  public selectedValue:any;
  public result:any;

  public submit(){
    this.router.navigate(['']);
  }

  constructor(
    public services:AppState,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.selectedValue = this.services.getRouteComponentData("selected-shape");
    this.result = this.services.getRouteComponentData("result");
  }

}
