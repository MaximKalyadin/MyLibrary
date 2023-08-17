import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Output,
} from '@angular/core';
import { FilterStoreService } from '../../data-services/filter-store.service';
import { ITag } from '@core/models/basic-models';
import { Observable } from 'rxjs';
import { Utils } from '@core/models/types/utils';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent {
    @Output() creation: EventEmitter<void> = new EventEmitter<void>();
    protected popularTags$: Observable<Map<string, ITag>>;
    protected allTags$: Observable<ITag[]>;

    protected form = this.store.form;

    protected search = '';

    protected displayTagBlock = true;
    protected displaySearchBlock = true;

    constructor(private readonly store: FilterStoreService) {
        this.popularTags$ = store.popularTags$;
        this.allTags$ = store.allTags$;
    }

    protected create(): void {
        this.creation.emit();
    }

    protected selectTag(tag: ITag): void {
        this.store.onPopularTags(tag);
    }

    get filtered(): Observable<ITag[]> {
        return this.store.filterByAllTags(this.search);
    }

    focusInput(event: boolean): void {
        this.displayTagBlock = !(
            event && window.screen.width <= Utils.MOBILE_MAX_WIDTH
        );
    }

    focusInputTag(event: boolean) {
        this.displaySearchBlock = !(
            event && window.screen.width <= Utils.MOBILE_MAX_WIDTH
        );
    }
}
