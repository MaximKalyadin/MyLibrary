import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
    Inject,
} from '@angular/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { FormControl, Validators } from '@angular/forms';
import { Utils } from '@core/models/types/utils';
import { IContextFolderDialog } from '@core/models/intermediate-models';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-folder-create',
    styleUrls: ['./folder-create.component.scss'],
    templateUrl: './folder-create.component.html',
})
export class FolderCreateComponent {
    protected isEdit: boolean = false;
    protected title: string = 'Создание папки';
    protected actionEdit: string = 'Создать';
    protected readonly control = new FormControl('', {
        validators: [Validators.required],
    });
    protected readonly name = new FormControl('', {
        validators: [Validators.required],
    });
    protected readonly tag = new FormControl('', {
        validators: [Validators.required],
    });
    protected sizeButton: 'm' | 'l' | 'xl' | 's' | 'xs' = 'xl';
    @HostListener('window:resize', [])
    private onResize() {
        this.setSize();
    }
    constructor(
        @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
        @Inject(POLYMORPHEUS_CONTEXT)
        private readonly context: TuiDialogContext<
            number,
            IContextFolderDialog
        >,
    ) {
        this.isEdit = context.data.isEdit;
        this.title = context.data.isEdit
            ? 'Редактирование папки'
            : 'Создание папки';
        this.actionEdit = context.data.isEdit ? 'Редактировать' : 'Создать';
        this.setSize();
    }
    protected create(): void {
        this.context.completeWith(2);
    }

    protected close(): void {
        this.context.completeWith(0);
    }

    protected isMobile(): boolean {
        return window.innerWidth <= Utils.MOBILE_MAX_WIDTH;
    }

    protected setSize(): void {
        this.sizeButton = this.isMobile() ? 'm' : 'l';
    }
}
