import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Users } from './user';

@Injectable()
export class AuthGuardGuard implements CanActivate {
  constructor(private router : Router,private authService: Users){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.authService.isLogenIn)
      {
        return true;
      }else{
        this.router.navigate(['/login']);
      } 
  }
}
