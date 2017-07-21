import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {UserService} from './user.service';

@Injectable()
export class AppGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}
  canActivate() {
    if (this.userService.user) {
      return this.userService.isLoggedIn();
    } else {
      this.userService.user$.subscribe(user => {
        if (!user) {
          this.router.navigate(['/home']);
        }
        return !!user;
      })
    }
  }
}
