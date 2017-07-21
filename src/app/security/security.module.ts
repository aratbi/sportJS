import { NgModule } from '@angular/core';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { HttpAuthService } from './http-auth.service';
import {AppGuard} from './app.guard';

@NgModule({
  imports: [
    SharedModule
  ],
  providers: [
    UserService,
    HttpAuthService,
    AppGuard
  ],
  declarations: [LoginComponent]
})
export class SecurityModule { }
