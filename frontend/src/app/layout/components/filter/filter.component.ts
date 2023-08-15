import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Output,
} from '@angular/core';
import { FilterService } from '../../data-services/filter.service';
import { ITag } from '@core/models/basic-models';
import { Observable } from 'rxjs';

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
        return this.store.filterByAllTags(this.search);
    }
}
