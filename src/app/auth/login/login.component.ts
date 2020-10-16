import { LayoutService } from './../../shared/services/layout.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

type UserFields = 'username' | 'password';
type FormErrors = { [u in UserFields]: string };

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  public formErrors: FormErrors = {
    'username': '',
    'password': '',
  };

  public errorMessage: any;

  constructor(private fb: FormBuilder, private layoutService: LayoutService, private router: Router) {
      this.loginForm = fb.group({
        username: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });
  }

  ngOnInit() {
  }

  login() {
    if(this.loginForm.invalid)
    return;
    this.router.navigateByUrl('/home');
  }
}
