import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { ITag } from '@core/models/basic-models';
import { map, Observable, of, tap, withLatestFrom } from 'rxjs';
import { IFilterConfig } from '@core/models/intermediate-models';
import { FormControl, FormGroup } from '@angular/forms';
import { TUI_DEFAULT_MATCHER, tuiPure } from '@taiga-ui/cdk';
import { Utils } from '@core/models/types/utils';

interface FilterState {
    allTags: ITag[];
    popularTags: Map<string, ITag>;
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
    popularTags: new Map()
        .set('Frontend', {
            select: false,
            name: 'Frontend',
        })
        .set('DI', {
            select: false,
            name: 'DI',
        })
        .set('JS', {
            select: false,
            name: 'JS',
        })
        .set('Angular', {
            select: false,
            name: 'Angular',
        })
        .set('TypeScript', {
            select: false,
            name: 'TypeScript',
        })
        .set('JavaScript', {
            select: false,
            name: 'JavaScript',
        }),
};

@Injectable()
export class FilterStoreService extends ComponentStore<FilterState> {
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
                withLatestFrom(this.state$),
                tap(([data, state]) => {
                    this.updatePopularTags({
                        tags: data,
                        popular: state.popularTags,
                        all: state.allTags,
                    });
                }),
            );
        });
    }

    readonly updatePopularTags = this.effect(
        (
            start$: Observable<{
                tags: string[];
                popular: Map<string, ITag>;
                all: ITag[];
            }>,
        ) => {
            return start$.pipe(
                tap((data) => {
                    data.tags.forEach((tag) => {
                        const tagMap = data.popular.get(tag);
                        if (tagMap && !tagMap.select) {
                            tagMap.select = true;
                        } else if (
                            !tagMap &&
                            data.all.map((value) => value.name).includes(tag)
                        ) {
                            data.popular.set(tag, {
                                select: true,
                                name: tag,
                            });
                        }
                    });

                    data.popular.forEach((value) => {
                        if (!data.tags.includes(value.name) && value.select) {
                            value.select = false;
                        }
                    });

                    if (data.popular.size > Utils.MAX_DISPLAY_POPULAR_TAGS) {
                        let deleteKey: string = Array.from(data.popular).map(
                            (value) => value[1],
                        )[0].name;

                        data.popular.forEach((value, key) => {
                            if (!value.select) {
                                deleteKey = key;
                            }
                        });
                        data.popular.delete(deleteKey);
                    }

                    if (
                        data.tags.filter((value) => {
                            return !(
                                data.all.map((tag) => tag.name).indexOf(value) >
                                -1
                            );
                        }).length
                    ) {
                        this.form.patchValue({
                            tags: data.tags.filter((tag) =>
                                data.all
                                    .map((value) => value.name)
                                    .includes(tag),
                            ),
                        });
                    }
                }),
            );
        },
    );

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

    readonly setPopularTagsArray = this.updater(
        (state, popularTags: ITag[]) => {
            const tagsMap = new Map<string, ITag>();
            popularTags.forEach((value) => {
                tagsMap.set(value.name, value);
            });
            return {
                ...state,
                popularTags: tagsMap,
            };
        },
    );

    readonly setPopularTagsMap = this.updater(
        (state, popularTags: Map<string, ITag>) => ({
            ...state,
            popularTags,
        }),
    );

    readonly popularTags$: Observable<Map<string, ITag>> = this.select(
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

    @tuiPure
    filterByAllTags(search: string): Observable<ITag[]> {
        return this.allTags$.pipe(
            map((tags) =>
                tags.filter((tag) => TUI_DEFAULT_MATCHER(tag.name, search)),
            ),
        );
    }
}
