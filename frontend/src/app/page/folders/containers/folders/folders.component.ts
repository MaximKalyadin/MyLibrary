import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-folders',
    templateUrl: './folders.component.html',
    styleUrls: ['./folders.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoldersComponent {
    count = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
}
