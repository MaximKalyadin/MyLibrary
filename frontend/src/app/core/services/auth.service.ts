import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private auth = false;

    constructor() {}

    isAuth(): boolean {
        return this.auth;
    }

    setAuth(value: boolean): void {
        this.auth = value;
    }
}
