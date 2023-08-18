import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaigaModule } from '../taiga/taiga.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FolderComponent } from './components/folder/folder.component';

@NgModule({
    declarations: [FolderComponent],
    imports: [CommonModule, TaigaModule, ReactiveFormsModule],
    exports: [FolderComponent],
    providers: [],
})
export class SharedModule {}
