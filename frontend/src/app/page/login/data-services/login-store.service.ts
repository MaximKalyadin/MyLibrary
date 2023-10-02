import { Injectable } from '@angular/core';
import { loginForm } from '../login.foms';
import { LoginFormService } from './login-form.service';
import { LoginClientService } from './login-client.service';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, Observable, switchMap, tap } from 'rxjs';
import { SpinnerService } from '@core/services/spinner.service';
import { NotificationService } from '@core/services/notification.service';

interface AuthorizationState {}

const defaultState: AuthorizationState = {};

@Injectable()
export class LoginStoreService extends ComponentStore<AuthorizationState> {
    loginForm: loginForm;
    constructor(
        private readonly loginFormService: LoginFormService,
        private readonly client: LoginClientService,
        private readonly router: Router,
        private readonly authService: AuthService,
        private readonly spinner: SpinnerService,
        private readonly notification: NotificationService,
    ) {
        super(defaultState);
        this.loginForm = loginFormService.getLoginForm();
    }

    readonly login = this.effect((action$: Observable<void>) => {
        return action$.pipe(
            switchMap(() => {
                if (
                    !this.loginForm.value.login ||
                    !this.loginForm.value.password
                ) {
                    return EMPTY;
                }
                this.spinner.start();
                return this.client.login(
                    this.loginForm.value.login,
                    this.loginForm.value.password,
                );
            }),
            tap((data) => {
                this.spinner.stop();
                if (data) {
                    this.authService.setAuth(data);
                    this.router.navigate([`Folders`]);
                } else {
                    this.notification.error(
                        'Не удалось войти в систему. Проверьте правильность введенных данных',
                        'Ошибка авторизации',
                    );
                }
            }),
        );
    });
}
