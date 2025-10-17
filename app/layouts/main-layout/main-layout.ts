import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { HideIfClaimsNotMet } from '../../directives/hide-if-claims-not-met';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HideIfClaimsNotMet],
  templateUrl: './main-layout.html',
  styles: ``
})
export class MainLayout {

  
  checkIfAdmin = (claims: any): boolean => {
    return claims?.role === 'Admin';
  };

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  onLogout() {
    this.authService.deleteToken();
    this.router.navigateByUrl('/signin');
  }
}
