import { LayoutService } from './../shared/services/layout.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { authenticationRoutes } from './auth.routes';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule,
    RouterModule.forChild(authenticationRoutes)
  ],
  providers: [
    LayoutService
  ]
})
export class AuthModule { }
