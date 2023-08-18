export interface Tag {
    id?: string;
    name: string;
}

export interface Folder {
    id?: string;
    name: string;
    tagId?: string;
    pictureId?: string;
}

export interface Picture {
    id?: string;
    link: string;
}
