import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Navigation } from '@core/models/navigation';

@Component({
    selector: 'app-navigation-panel',
    templateUrl: './navigation-panel.component.html',
    styleUrls: ['./navigation-panel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationPanelComponent {
    protected navigationMenu: Navigation[];
    private activeLink: Navigation;
    constructor(private readonly router: Router) {
        this.navigationMenu = [
            new Navigation('Книги', 'tuiIconBookOpenLarge'),
            new Navigation('Документация', 'tuiIconFileTextLarge'),
            new Navigation('Статьи', 'tuiIconIndentLarge', true),
            new Navigation('Код', 'tuiIconCodeLarge'),
            new Navigation('Видео', 'tuiIconYoutubeLarge'),
        ];

        this.activeLink = this.navigationMenu[2];
    }

    protected changePage(item: Navigation): void {
        this.activeLink.active = false;
        item.active = true;
        this.activeLink = item;
        item.navigate();
    }
}
