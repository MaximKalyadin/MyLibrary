import { Injectable } from '@angular/core';
import { loginForm, signUpForm } from '../login.foms';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class LoginFormService {
    getLoginForm(): loginForm {
        return new FormGroup({
            login: new FormControl<string>('', {
                nonNullable: true,
                validators: Validators.required,
            }),
            password: new FormControl<string>('', {
                nonNullable: true,
                validators: Validators.required,
            }),
        });
    }

    getSignUpForm(): signUpForm {
        return new FormGroup({
            password: new FormControl<string>('', {
                nonNullable: true,
                validators: Validators.required,
            }),
            confirmPassword: new FormControl<string>('', {
                nonNullable: true,
                validators: Validators.required,
            }),
            email: new FormControl<string>('', {
                nonNullable: true,
                validators: [
                    Validators.required,
                    Validators.pattern(
                        '([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z0-9_-]+)',
                    ),
                ],
            }),
            phone: new FormControl<string>('', {
                nonNullable: true,
                validators: Validators.required,
            }),
        });
    }
}
