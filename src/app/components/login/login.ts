import { JsonPipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, NgModel, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token-service';

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatButton, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  email = new FormControl('admin@service.com');
  password = new FormControl('1234');

  constructor(
    private router: Router,
    private tokenService: TokenService,
  ) {}

  login() {
    //Generate token & save.
    this.tokenService.generateToken();

    //assuming that worked, redirect out
    this.router.navigateByUrl('');
  }
}
