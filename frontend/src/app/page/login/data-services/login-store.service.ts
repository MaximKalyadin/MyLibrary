import { Injectable } from '@angular/core';
import { loginForm } from '../login.foms';
import { LoginFormService } from './login-form.service';

@Injectable()
export class LoginStoreService {
    form: loginForm;
    constructor(private readonly loginFormService: LoginFormService) {
        this.form = loginFormService.getLoginForm();
    }
}
