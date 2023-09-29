import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-folder-create',
    styleUrls: ['./folder-create.component.scss'],
    templateUrl: './folder-create.component.html',
})
export class FolderCreateComponent {
    constructor(
        @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
        @Inject(POLYMORPHEUS_CONTEXT)
        private readonly context: TuiDialogContext<number, number>,
    ) {}

    create(): void {
        this.context.completeWith(2);
    }

    close(): void {
        this.context.completeWith(0);
    }
}
