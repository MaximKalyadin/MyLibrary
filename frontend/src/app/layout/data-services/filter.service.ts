import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { ITag } from '@core/models/basic-models';
import { filter, Observable, of, tap, withLatestFrom } from 'rxjs';
import { IFilterConfig } from '@core/models/intermediate-models';
import { FormControl, FormGroup } from '@angular/forms';

interface FilterState {
    allTags: ITag[];
    popularTags: ITag[];
}

const defaultState: FilterState = {
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
            select: false,
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
    private maxCountPopularTag = 20;

    form = new FormGroup({
        search: new FormControl<string>(''),
        tags: new FormControl<string[]>([], {
            nonNullable: true,
        }),
    });

    constructor() {
        super(defaultState);

        const _ = this.effect(() => {
            return this.form.controls.tags.valueChanges.pipe(
                tap((data) => {
                    // this.updatePopularTags(data);
                }),
            );
        });
    }

    readonly updatePopularTags = this.effect((start$: Observable<string[]>) => {
        return start$.pipe(tap(([tags]) => {}));
    });

    readonly onPopularTags = this.effect((start$: Observable<ITag>) => {
        return start$.pipe(
            tap((tag) => {
                let tags = [...(this.form.value.tags ?? [])];
                tag.select = !tag.select;
                if (!this.form.value.tags?.includes(tag.name)) {
                    tags.push(tag.name);
                } else {
                    tags = tags.filter((value) => value !== tag.name);
                }
                this.form.patchValue({
                    tags: tags,
                });
            }),
        );
    });

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

    readonly filterConfig$: Observable<IFilterConfig> = of({
        search: this.form.value.search ?? '',
        searchTags: this.form.value.tags?.map<ITag>((value) => {
            return {
                select: false,
                name: value,
            };
        }),
    });

    readonly filterSearch$: Observable<string> = of(
        this.form.value.search ?? '',
    );

    readonly filterSearchTags$: Observable<ITag[]> = of(
        this.form.value.tags?.map<ITag>((value) => {
            return {
                select: false,
                name: value,
            };
        }) ?? [],
    );
}
