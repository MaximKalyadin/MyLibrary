import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Output,
} from '@angular/core';
import { FilterService } from '../../data-services/filter.service';
import { ITag } from '@core/models/basic-models';
import { map, Observable } from 'rxjs';
import { TUI_DEFAULT_MATCHER, tuiPure } from '@taiga-ui/cdk';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent {
    @Output() creation: EventEmitter<void> = new EventEmitter<void>();
    protected popularTags$: Observable<ITag[]>;
    protected allTags$: Observable<ITag[]>;

    form = this.store.form;

    search = '';

    constructor(private readonly store: FilterService) {
        this.popularTags$ = store.popularTags$;
        this.allTags$ = store.allTags$;
    }

    protected create() {
        this.creation.emit();
    }

    protected selectTag(tag: ITag) {
        this.store.onPopularTags(tag);
    }

    get filtered(): Observable<ITag[]> {
        return this.filterBy(this.search);
    }

    @tuiPure
    private filterBy(search: string): Observable<ITag[]> {
        return this.allTags$.pipe(
            map((tags) =>
                tags.filter((tag) => TUI_DEFAULT_MATCHER(tag.name, search)),
            ),
        );
    }
}
