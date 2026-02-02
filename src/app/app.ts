import { Component, inject, signal } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterOutlet } from '@angular/router';
import { AccountService } from './services/account-service';
import { MatButton } from '@angular/material/button';
import { DecimalPipe, JsonPipe } from '@angular/common';
import { Account } from './api/generated';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButton, JsonPipe, DecimalPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('swagger-ui');

  private readonly accountService = inject(AccountService);

  acccountData = signal<Account>({
    id: 0,
    username: '',
    email: '',
    lodgementOne: 0,
    lodgementTwo: 0,
  });

  data = {};

  fetchData() {
    this.accountService.getAccount(12).subscribe((account) => {
      this.acccountData.set(account);
    });
  }
}
