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

  accountHolder = new FormControl();
  IBAN = new FormControl();
  sortCode = new FormControl();
  address = new FormControl();
  amountOwed = new FormControl();

  data = {};

  fetchData() {
    this.accountService.getAccount(12).subscribe((account) => {
      console.log(account);

      //populate form controls w Response.
      this.accountHolder.patchValue(account.ownerName);
      this.IBAN.patchValue(account.iban);
      this.sortCode.patchValue(account.sortCode);
      this.address.patchValue(account.address);
      this.amountOwed.patchValue(account.amountOwed);
    });

    //update backend.
  }

  submit() {
    console.log(this.accountHolder.value);
    this.accountService.postAccount(12, {}).subscribe((x) => console.log(x));
  }
}
