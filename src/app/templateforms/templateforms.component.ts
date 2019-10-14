import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateforms',
  templateUrl: './templateforms.component.html',
  styleUrls: ['./templateforms.component.scss']
})
export class TemplateformsComponent implements OnInit {

  constructor() { }
  submitted = false;
  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
}

}
