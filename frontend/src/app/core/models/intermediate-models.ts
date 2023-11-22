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

export interface IFoldersView {
    id?: string;
    title: string;
    tagId?: string;
    pictureId?: string;
    tag?: string;
    image: string;
    navigation: string;
}

export interface ICardView {
    tag: string;
    image: string;
    important: boolean;
    title: string;
    description: string;
    date: string;
    link: string;
}
