import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LoginClientService {
    loginMock = {
        login: 'test',
        password: '123',
    };

    constructor() {}

    login(login: string, password: string): Observable<boolean> {
        if (
            login === this.loginMock.login &&
            password === this.loginMock.password
        ) {
            return of(true).pipe(delay(3000));
        }
        return of(false).pipe(delay(3000));
    }
}
