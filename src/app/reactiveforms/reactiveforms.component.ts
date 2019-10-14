import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PasswordValidation } from '../password-validation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.scss']
})
export class ReactiveformsComponent implements OnInit {
  form;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router){
    this.form = formBuilder.group({
      firstname: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    }, {
      validator: PasswordValidation.MatchPassword // your validation method
    });
  }

  ngOnInit() {
  }

  submit() {
    this.submitted = true;

    if (this.form.valid) {
      console.log(this.form.value);
     // this.router.navigate(['/details']);
    } else {
      return;
    }
  }

}
