import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaigaModule } from '../taiga/taiga.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FolderComponent } from './components/folder/folder.component';
import { FolderCreateComponent } from './components/folder-create/folder-create.component';

@NgModule({
    declarations: [FolderComponent, FolderCreateComponent],
    imports: [CommonModule, TaigaModule, ReactiveFormsModule],
    exports: [FolderComponent],
    providers: [],
})
export class SharedModule {}
