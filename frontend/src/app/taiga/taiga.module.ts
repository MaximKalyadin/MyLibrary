import { NgModule } from '@angular/core';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiHintModule,
    TuiModeModule,
    TuiScrollbarModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiBadgeModule,
    TuiDataListWrapperModule,
    TuiInputModule,
    TuiInputTagModule,
    TuiMultiSelectModule,
    TuiTagModule,
    TuiTilesModule,
} from '@taiga-ui/kit';
import { TuiLetModule, TuiValueChangesModule } from '@taiga-ui/cdk';
import { TuiRippleModule } from '@taiga-ui/addon-mobile';
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
        TuiMultiSelectModule,
        TuiLetModule,
        TuiDataListWrapperModule,
        TuiDataListModule,
        TuiRippleModule,
        TuiTilesModule,
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
        TuiMultiSelectModule,
        TuiLetModule,
        TuiDataListWrapperModule,
        TuiDataListModule,
        TuiRippleModule,
        TuiTilesModule,
    ],
})
export class TaigaModule {}
