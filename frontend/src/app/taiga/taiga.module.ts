import { NgModule } from '@angular/core';
import {
    TuiButtonModule,
    TuiHintModule,
    TuiModeModule,
    TuiScrollbarModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiBadgeModule,
    TuiInputModule,
    TuiInputTagModule,
    TuiTagModule,
} from '@taiga-ui/kit';
import { TuiValueChangesModule } from '@taiga-ui/cdk';
@NgModule({
    imports: [
        TuiSvgModule,
        TuiInputModule,
        TuiHintModule,
        TuiTextfieldControllerModule,
        TuiModeModule,
        TuiButtonModule,
        TuiInputTagModule,
        TuiTagModule,
        TuiScrollbarModule,
        TuiBadgeModule,
        TuiValueChangesModule,
    ],
    exports: [
        TuiSvgModule,
        TuiInputModule,
        TuiHintModule,
        TuiTextfieldControllerModule,
        TuiModeModule,
        TuiButtonModule,
        TuiInputTagModule,
        TuiTagModule,
        TuiScrollbarModule,
        TuiBadgeModule,
        TuiValueChangesModule,
    ],
})
export class TaigaModule {}
