import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaigaModule } from '../../taiga/taiga.module';
import { FoldersRotingModule } from './folders-roting.module';
import { FoldersComponent } from './containers/folders/folders.component';
import { FolderComponent } from './components/folder/folder.component';
import { FolderCreateComponent } from './components/folder-create/folder-create.component';

@NgModule({
    declarations: [FoldersComponent, FolderComponent, FolderCreateComponent],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        TaigaModule,
        FoldersRotingModule,
    ],
    providers: [],
})
export class FoldersModule {}
