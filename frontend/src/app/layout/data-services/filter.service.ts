import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { ITag } from '@core/models/basic-models';
import { filter, Observable, shareReplay } from 'rxjs';
import { IFilterConfig } from '@core/models/intermediate-models';

interface FilterState {
    search: string;
    searchTag: ITag | null;
    popularTags: ITag[];
}

const defaultState: FilterState = {
    search: '',
    searchTag: null,
    popularTags: [],
};

@Injectable()
export class FilterService extends ComponentStore<FilterState> {
    constructor() {
        super(defaultState);
    }

    readonly setSearch = this.updater((state, search: string) => ({
        ...state,
        search,
    }));

    readonly clearSearch = this.updater((state) => ({
        ...state,
        search: '',
    }));

    readonly setSearchTag = this.updater((state, searchTag: ITag) => ({
        ...state,
        searchTag,
    }));

    readonly clearSearchTag = this.updater((state) => ({
        ...state,
        searchTag: null,
    }));

    readonly setPopularTags = this.updater((state, popularTags: ITag[]) => ({
        ...state,
        popularTags,
    }));

    readonly popularTags$: Observable<ITag[]> = this.select(
        (state) => state.popularTags,
    );

    readonly filterConfig$: Observable<IFilterConfig> = this.select((state) => {
        return {
            search: state.search,
            searchTag: state.searchTag,
        };
    });

    readonly filterSearch$: Observable<string> = this.select(
        (state) => state.search,
    );

    readonly filterSearchTag$: Observable<ITag> = this.select(
        (state) => state.searchTag,
    ).pipe(
        filter((data: ITag | null): data is ITag => !!data),
        shareReplay(1),
    );
}
