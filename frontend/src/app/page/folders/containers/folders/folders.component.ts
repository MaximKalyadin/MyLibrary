import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DialogService } from '@core/services/dialog.service';
import { IFoldersView } from '@core/models/intermediate-models';

@Component({
    selector: 'app-folders',
    templateUrl: './folders.component.html',
    styleUrls: ['./folders.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoldersComponent {
    // mock
    folders: IFoldersView[] = [
        {
            tag: 'Angular',
            image: '',
            id: '23',
            title: 'Angular, архитектура на основе сигналов и современные приложения',
            navigation: '/Cards',
            tagId: 'vh',
            pictureId: '645',
        },
        {
            tag: 'Angular',
            image: '',
            id: '23',
            title: 'Angular, архитектура на основе сигналов и современные приложения',
            navigation: '/Cards',
            tagId: 'vh',
            pictureId: '645',
        },
        {
            tag: 'Angular',
            image: '',
            id: '23',
            title: 'Angular, архитектура на основе сигналов и современные приложения',
            navigation: 'Cards',
            tagId: 'vh',
            pictureId: '645',
        },
        {
            tag: 'Angular',
            image: '',
            id: '23',
            title: 'Angular, архитектура на основе сигналов и современные приложения',
            navigation: '/Cards',
            tagId: 'vh',
            pictureId: '645',
        },
        {
            tag: 'Angular',
            image: '',
            id: '23',
            title: 'Angular, архитектура на основе сигналов и современные приложения',
            navigation: '/Cards',
            tagId: 'vh',
            pictureId: '645',
        },
        {
            tag: 'Angular',
            image: '',
            id: '23',
            title: 'Angular, архитектура на основе сигналов и современные приложения',
            navigation: '/Cards',
            tagId: 'vh',
            pictureId: '645',
        },
        {
            tag: 'Angular',
            image: '',
            id: '23',
            title: 'Angular, архитектура на основе сигналов и современные приложения',
            navigation: '/Cards',
            tagId: 'vh',
            pictureId: '645',
        },
    ];

    constructor(private readonly dialogService: DialogService) {}
    protected editFolder(): void {
        this.dialogService.open(true);
    }
}
