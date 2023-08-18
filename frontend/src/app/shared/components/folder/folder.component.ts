import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Inject,
    Input,
    Output,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-folder',
    templateUrl: './folder.component.html',
    styleUrls: ['./folder.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FolderComponent {
    @Output() editFolder: EventEmitter<void> = new EventEmitter<void>();
    @Input({ required: true }) title: string = '';
    @Input() image: string | null = null;
    @Input() navigation: string | null = null;

    private readonly router: Router = Inject(Router);

    edit(): void {
        this.editFolder.emit();
    }

    navigate(): void {
        if (this.navigation) {
            this.router.navigate([this.navigation]);
        }
    }
}
