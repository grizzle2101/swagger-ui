import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { TokenService } from './services/token-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButton, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('swagger-ui');

  constructor(
    private router: Router,
    public tokenService: TokenService,
  ) {}

  LoginOrLogout() {
    if (this.tokenService.hasToken()) {
      this.tokenService.destroyToken();
      this.router.navigateByUrl('/');
    } else this.router.navigateByUrl('login');
  }
}
