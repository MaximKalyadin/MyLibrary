import { Tag } from '@core/models/basic-models';

export interface ITag extends Tag {
    select: boolean;
}

export interface IFilterConfig {
    search?: string;
    searchTags?: ITag[];
}

export interface IContextFolderDialog {
    isEdit: boolean;
}
