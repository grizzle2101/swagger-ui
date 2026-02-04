import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  generateToken() {
    let token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30';

    localStorage.setItem('accessToken', token); // This is not secure

    console.log(token);
  }

  retrieveToken() {
    return localStorage.getItem('accessToken');
  }

  hasToken() {
    return localStorage.getItem('accessToken') != null;
  }

  destroyToken() {
    localStorage.removeItem('accessToken');
  }
}
