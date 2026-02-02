import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../api/generated';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  readonly baseUrl = 'http://localhost:3000';

  private http = inject(HttpClient);

  getAccount(id: number): Observable<Account> {
    return this.http.get<Account>(this.baseUrl + '/accounts/' + id);
  }
}
