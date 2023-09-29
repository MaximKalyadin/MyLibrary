import { Injectable } from '@angular/core';
import { loginForm } from '../login.foms';
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
}
