import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DialogService } from '@core/services/dialog.service';

@Component({
    selector: 'app-folders',
    templateUrl: './folders.component.html',
    styleUrls: ['./folders.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoldersComponent {
    count = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

    constructor(private readonly dialogService: DialogService) {}
    protected editFolder(): void {
        this.dialogService.open(true);
    }
}
