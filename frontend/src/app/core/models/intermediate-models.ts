import { ITag } from '@core/models/basic-models';

export interface IFilterConfig {
    search: string;
    searchTag: ITag | null;
}
