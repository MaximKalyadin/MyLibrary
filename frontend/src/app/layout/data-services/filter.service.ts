import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { ITag } from '@core/models/basic-models';
import { Observable } from 'rxjs';
import { IFilterConfig } from '@core/models/intermediate-models';

interface FilterState {
    search: string;
    searchTags: ITag[];
    allTags: ITag[];
    popularTags: ITag[];
}

const defaultState: FilterState = {
    search: '',
    searchTags: [],
    allTags: [
        {
            select: false,
            name: 'JavaScript',
        },
        {
            select: true,
            name: 'Angular',
        },
        {
            select: false,
            name: 'TypeScript',
        },
        {
            select: false,
            name: 'JS',
        },
        {
            select: false,
            name: 'DI',
        },
        {
            select: false,
            name: 'Frontend',
        },
    ],
    popularTags: [
        {
            select: false,
            name: 'JavaScript',
        },
        {
            select: true,
            name: 'Angular',
        },
        {
            select: false,
            name: 'TypeScript',
        },
    ],
};

@Injectable()
export class FilterService extends ComponentStore<FilterState> {
    private maxCountPopularTag = 5;
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

    readonly setSearchTags = this.updater((state, searchTags: ITag[]) => ({
        ...state,
        searchTags,
    }));

    readonly setSearchTagInput = this.updater((state, tag: ITag) => ({
        ...state,
        searchTags: this._setSearchTagInput(
            tag,
            state.popularTags,
            state.searchTags,
            state.allTags,
        ),
    }));

    private _setSearchTagInput(
        tag: ITag,
        popularTags: ITag[],
        searchTags: ITag[],
        allTags: ITag[],
    ): ITag[] {
        const result = [...searchTags];
        let index = result.findIndex((value) => value.name === tag.name);
        if (index === -1) {
            result.push(tag);
        }

        if (allTags.map((value) => value.name).includes(tag.name)) {
            const popular = [...popularTags];
            index = popular.findIndex((value) => value.name === tag.name);
            if (index >= 0) {
                popular[index].select = true;
            } else {
                popular.unshift({
                    ...tag,
                    select: true,
                });
            }
            if (popular.length > this.maxCountPopularTag) {
                popular.pop();
            }
            this.setPopularTags(popular);
        }
        return result;
    }

    readonly setSearchTagSelect = this.updater((state, tag: ITag) => ({
        ...state,
        searchTags: this._setSearchTagSelect(
            tag,
            state.popularTags,
            state.searchTags,
        ),
    }));

    private _setSearchTagSelect(
        tag: ITag,
        popularTags: ITag[],
        searchTags: ITag[],
    ): ITag[] {
        const result = [...searchTags];
        const findTagIndex = result.findIndex(
            (value) => value.name === tag.name,
        );
        if (findTagIndex >= 0) {
            result.splice(findTagIndex, 1);
        } else {
            result.push(tag);
        }
        const popular = [...popularTags].map((value) => {
            if (value.name === tag.name) {
                value.select = !value.select;
            }
            return value;
        });
        this.setPopularTags(popular);
        return result;
    }

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

    private readonly setAllTags = this.updater((state, allTags: ITag[]) => ({
        ...state,
        allTags,
    }));

    readonly allTags$: Observable<ITag[]> = this.select(
        (state) => state.allTags,
    );

    readonly filterConfig$: Observable<IFilterConfig> = this.select((state) => {
        return {
            search: state.search,
            searchTags: state.searchTags,
        };
    });

    readonly filterSearch$: Observable<string> = this.select(
        (state) => state.search,
    );

    readonly filterSearchTags$: Observable<ITag[]> = this.select(
        (state) => state.searchTags,
    );
}
