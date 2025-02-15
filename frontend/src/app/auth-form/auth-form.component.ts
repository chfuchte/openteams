import { Component } from "@angular/core";
import { AuthService } from "../auth.service";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from "@angular/common";
import { Router } from "@angular/router";

@Component({
    selector: "app-auth-form",
    imports: [ReactiveFormsModule, NgIf],
    templateUrl: "./auth-form.component.html",
    styleUrl: "./auth-form.component.scss",
})
export class AuthFormComponent {
    authForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(1)]),
    })

    error: string | null = null;

    constructor(
        private authService: AuthService,
        private router: Router,
    ) { }

    async handleSubmit() {
        if (this.authForm.invalid || !this.authForm.value.email || !this.authForm.value.password) {
            this.error = 'Bitte geben Sie eine gültige E-Mail und ein Passwort ein';
            return;
        }

        if (!this.authService.login({
            email: this.authForm.value.email?.toString() ?? '',
            password: this.authForm.value.password?.toString() ?? '',
        })) {
            this.error = 'Ungültige E-Mail oder Passwort';
            this.authForm.controls.password.reset();
            return;
        }

        this.error = null;
        this.authForm.reset();
        await this.router.navigate(['/dashboard']);
    }
}
