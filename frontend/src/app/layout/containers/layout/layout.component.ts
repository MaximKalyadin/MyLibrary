import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { DialogService } from '@core/services/dialog.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
    constructor(
        private readonly auth: AuthService,
        private readonly dialogService: DialogService,
    ) {}

    create(): void {
        this.dialogService.open(false);
    }

    isAuth(): boolean {
        return this.auth.isAuth();
    }
}
