import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICardView } from '@core/models/intermediate-models';

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsComponent {
    cards: ICardView[] = [
        {
            tag: 'Angular',
            image: '',
            link: '',
            title: 'AA',
            date: 'klkl',
            description: 'sdv',
            important: false,
        },
    ];

    editCards(): void {}
}
