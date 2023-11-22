import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaigaModule } from '../taiga/taiga.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [],
    imports: [CommonModule, TaigaModule, ReactiveFormsModule],
    exports: [],
    providers: [],
})
export class SharedModule {}
