import { Component, inject, signal } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterOutlet } from '@angular/router';
import { AccountService } from './services/account-service';
import { MatButton } from '@angular/material/button';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButton, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('swagger-ui');

  private readonly accountService = inject(AccountService);

  acccountData = signal<any>({});

  data = {};

  fetchData() {
    this.accountService.getAccount(12).subscribe((account) => {
      this.acccountData.set(account);
    });
  }
}
