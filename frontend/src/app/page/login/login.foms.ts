import { FormControl, FormGroup } from '@angular/forms';

export type loginForm = FormGroup<{
    login: FormControl<string>;
    password: FormControl<string>;
}>;

export type signUpForm = FormGroup<{
    phone: FormControl<string>;
    email: FormControl<string>;
    password: FormControl<string>;
    confirmPassword: FormControl<string>;
}>;
