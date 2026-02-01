import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  readonly baseUrl = 'http://localhost:3000';

  private http = inject(HttpClient);

  getAccount(id: number) {
    return this.http.get(this.baseUrl + '/accounts/' + id);
  }
}
