import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styles: ``
})
export class LoginComponent implements OnInit {
hasDisplayableError(arg0: string) {
throw new Error('Method not implemented.');
}
  form!: FormGroup;
  isSubmitted: boolean = false;
  message: string = '';
  messageType: 'success' | 'error' | '' = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/dashboard');
    }

    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.isSubmitted = true;
    this.message = '';
    this.messageType = '';
    
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      this.message = 'Sign-in failed.';
      this.messageType = 'error';
      return;
    }

    this.authService.signin(this.form.value).subscribe({
      next: (response: any) => {
        if (response?.token) {
          localStorage.setItem('token', response.token);
          this.authService.saveToken(response.token);
          this.message = 'Sign-in successful.';
          this.messageType = 'success';

          setTimeout(() => {
            this.router.navigateByUrl('/dashboard');
          }, 1000);
        } else {
          this.message = 'Sign-in failed.';
          this.messageType = 'error';
        }
      },
      error: () => {
        this.message = 'Sign-in failed.';
        this.messageType = 'error';
      }
    });
  }
}
