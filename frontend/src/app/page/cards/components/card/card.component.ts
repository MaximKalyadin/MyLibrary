import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import { ICardView } from '@core/models/intermediate-models';
import { Router } from '@angular/router';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
    @Output() editCard: EventEmitter<void> = new EventEmitter<void>();
    @Input({ required: true }) cardView: ICardView | null = null;

    constructor(private readonly router: Router) {}

    openLink(): void {
        if (this.cardView) {
            window.open(this.cardView.link, '_blank');
        }
    }

    edit(): void {
        this.editCard.emit();
    }

    navigate() {}
}
