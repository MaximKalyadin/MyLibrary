import { Router } from '@angular/router';
import { Inject } from '@angular/core';

export class Navigation {
    name: string;
    url: string;
    icon: string;
    active: boolean;

    private readonly router: Router = Inject(Router);

    constructor(
        private readonly _name: string,
        private readonly _icon: string,
        private readonly _active?: boolean,
        private readonly _url?: string,
    ) {
        this.url = _url ?? '';
        this.name = _name;
        this.icon = _icon;
        this.active = _active ?? false;
    }

    public navigate(): void {
        if (this._url) {
            this.router.navigate([this._url]);
        }
    }
}
