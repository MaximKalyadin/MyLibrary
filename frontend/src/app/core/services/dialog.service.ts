import { Inject, Injectable, Injector } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { FolderCreateComponent } from '@shared/components/folder-create/folder-create.component';

@Injectable({
    providedIn: 'root',
})
export class DialogService {
    constructor(
        @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
        @Inject(Injector) private readonly injector: Injector,
    ) {}

    open(edit: boolean): void {
        this.dialogs
            .open<number>(
                new PolymorpheusComponent(FolderCreateComponent, this.injector),
                {
                    data: {
                        isEdit: edit,
                    },
                    closeable: false,
                    dismissible: true,
                    size: 'm',
                },
            )
            .subscribe({
                next: (data) => {
                    console.log(data);
                },
                error: (error) => {
                    console.log(error);
                },
                complete: () => {
                    console.log('complete');
                },
            });
    }
}
