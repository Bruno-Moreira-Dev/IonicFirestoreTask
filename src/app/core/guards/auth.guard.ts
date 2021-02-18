import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, take } from 'rxjs/operators';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.checkAuthState(state.url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(route, state);
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    // tasks edit 9
    // tasks/edit /9
    const url = segments.map((s) => `/${s}`).join('');
    return this.checkAuthState(url).pipe(take(1));
  }

  // /tasks/create
  private checkAuthState(redirect: string): Observable<boolean> {
    return this.authService.isAutenticated.pipe(
      tap((is) => {
        if (!is) {
          this.router.navigate(['/login'], {
            queryParams: { redirect }, // /login?redirect=/tasks/create
          });
        }
      })
    );
  }
}
