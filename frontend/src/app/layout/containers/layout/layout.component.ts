import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    Injector,
} from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { FolderCreateComponent } from '@shared/components/folder-create/folder-create.component';
import { TuiDialogService } from '@taiga-ui/core';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
    private readonly dialog = this.dialogs.open<number>(
        new PolymorpheusComponent(FolderCreateComponent, this.injector),
        {
            data: 237,
            closeable: false,
            dismissible: true,
            size: 'm',
        },
    );

    constructor(
        private readonly auth: AuthService,
        @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
        @Inject(Injector) private readonly injector: Injector,
    ) {}

    create(): void {
        this.dialog.subscribe({
            next: (data) => {
                console.log(data);
            },
            error: (error) => {
                console.log(error);
            },
            complete: () => {
                console.log('aLL');
            },
        });
    }

    isAuth(): boolean {
        return this.auth.isAuth();
    }
}
