import { Component, inject, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Account } from '../../api/generated';
import { AccountService } from '../../services/account-service';
import { DecimalPipe, JsonPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-account-details',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatButton, ReactiveFormsModule],
  templateUrl: './account-details.html',
  styleUrl: './account-details.scss',
})
export class AccountDetails {
  private readonly accountService = inject(AccountService);

  accountNumber: string | undefined = undefined;
  accountHolder = new FormControl();
  IBAN = new FormControl();
  sortCode = new FormControl();
  address = new FormControl();
  amountOwed = new FormControl();

  data = {};

  fetchData() {
    this.accountService.getAccount(12).subscribe((account) => {
      console.log(account);
      this.accountNumber = account.accountNumber;
      this.accountHolder.patchValue(account.ownerName);
      this.IBAN.patchValue(account.iban);
      this.sortCode.patchValue(account.sortCode);
      this.address.patchValue(account.address);
      this.amountOwed.patchValue(account.amountOwed);
    });
  }

  submit() {
    let account: Account = {
      accountNumber: this.accountNumber ?? undefined,
      ownerName: this.accountHolder.value ?? undefined,
      iban: this.IBAN.value ?? undefined,
      sortCode: this.sortCode.value ?? undefined,
      address: this.address.value ?? undefined,
      amountOwed: this.amountOwed.value ?? undefined,
    };

    this.accountService.postAccount(account).subscribe((x) => console.log('result - ', x));
  }
}
