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
    protected popularTags$: Observable<ITag[]>;
    constructor(private readonly store: FilterService) {
        this.popularTags$ = store.popularTags$;
    }

    protected create() {
        this.creation.emit();
    }

    selectTag(tag: ITag) {}
}
