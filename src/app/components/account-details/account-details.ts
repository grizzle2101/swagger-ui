import { Component, inject, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Account } from '../../api/generated';
import { AccountService } from '../../services/account-service';
import { DecimalPipe, JsonPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-account-details',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatButton],
  templateUrl: './account-details.html',
  styleUrl: './account-details.scss',
})
export class AccountDetails {
  private readonly accountService = inject(AccountService);

  acccountData = signal<Account>({
    ownerName: '',
    accountNumber: '',
    firstLodgement: 0,
    secondLodgement: 0,
  });

  data = {};

  fetchData() {
    this.accountService.getAccount(12).subscribe((account) => {
      console.log(account);
      this.acccountData.set(account);
    });
  }

  submit() {}
}
