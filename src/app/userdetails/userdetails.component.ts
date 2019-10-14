import { Component, OnInit, Injectable } from '@angular/core';
import { ReactiveformsComponent } from '../reactiveforms/reactiveforms.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {

  constructor(public RF: ReactiveformsComponent) { }

  ngOnInit() {
    console.log("Router", this.RF.form.value)
  }

}
