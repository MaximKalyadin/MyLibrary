import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
    providedIn: 'root',
})
export class SpinnerService {
    constructor(private spinner: NgxSpinnerService) {}

    start(name?: string): void {
        this.spinner.show(name ?? 'spinner', {
            bdColor: 'rgba(0, 0, 0, 0.8)',
            size: 'medium',
            color: '#6400c8',
            type: 'square-jelly-box',
            fullScreen: true,
        });
    }

    stop(name?: string): void {
        this.spinner.hide(name ?? 'spinner');
    }
}
