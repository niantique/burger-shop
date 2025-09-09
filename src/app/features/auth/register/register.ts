import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Button } from "../../../shared/components/button/button";

function matchValidator(a: string, b:string) {
  return (group: AbstractControl): ValidationErrors | null => {
    const va = group.get(a)?.value;
    const vb = group.get(b)?.value;
    return va && vb && va !== vb ? { mismatch: true} : null;
  };
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, Button],
  templateUrl: './register.html',
  styleUrl: './register.css'
})

export class Register {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);

  errorMsg = '';

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  get name() {
    return this.form.get('name')!;
  }

  get email() {
    return this.form.get('email')!;
  }

  get password() {
    return this.form.get('password')!;
  }



  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    return;
  }
  this.errorMsg = '';

  const payload = {
    name: this.name.value!,
    email: this.email.value!,
    password: this.password?.value!,
  };

  this.auth.register(payload).subscribe({
    next: () => this.router.navigateByUrl('/'),
    error: (err) =>
    (this.errorMsg = err?.error?.message || 'Inscription impossible'),
  });
  }
}
