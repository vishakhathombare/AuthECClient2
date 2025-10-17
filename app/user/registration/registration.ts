import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.html',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,],
})
export class Registration implements OnInit {
  form!: FormGroup;
  isSubmitted = false;
  registrationError: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
  
  if (this.authService.isLoggedIn()) {
    this.router.navigateByUrl('/dashboard');
    return;
  }

  
  this.form = this.formBuilder.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/(?=.*[^a-zA-Z0-9])/) 
      ]
    ],
    confirmPassword: ['', Validators.required],
  });
}
    

  passwordMatchValidator: ValidatorFn = (group: AbstractControl): null => {
    const password = group.get('password');
    const confirmPassword = group.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
    } else {
      const errors = confirmPassword?.errors;
      if (errors) {
        delete errors['passwordMismatch'];
        confirmPassword.setErrors(Object.keys(errors).length ? errors : null);
      }
    }

    return null;
  };

  onSubmit(): void {
    this.isSubmitted = true;

    if (this.form.invalid) {
      return;
    }

    this.authService.createUser(this.form.value).subscribe({
      next: (res) => {
        console.log('Registration successful:', res);
        this.router.navigate(['/signin']); 
      },
      error: (err) => {
        console.error('Registration error:', err);
        this.registrationError = 'Registration failed. Try again.';
      }
    });
  }

  hasDisplayableError(controlName: string): boolean {
    const control = this.form.get(controlName);
    return Boolean(!!control?.invalid) && (this.isSubmitted || !!control?.touched);
  }
}
