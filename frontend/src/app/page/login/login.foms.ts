import { FormControl, FormGroup } from '@angular/forms';

export type loginForm = FormGroup<{
    login: FormControl<string>;
    password: FormControl<string>;
}>;
