import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { TaigaModule } from '../../taiga/taiga.module';
import { FoldersRotingModule } from './folders-roting.module';
import { FoldersComponent } from './containers/folders/folders.component';

@NgModule({
    declarations: [FoldersComponent],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        SharedModule,
        TaigaModule,
        FoldersRotingModule,
    ],
    providers: [],
})
export class FoldersModule {}
