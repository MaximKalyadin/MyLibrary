import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './containers/layout/layout.component';
import { NavigationPanelComponent } from './components/navigation-panel/navigation-panel.component';
import { TaigaModule } from '../taiga/taiga.module';
import { FilterComponent } from './components/filter/filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
    declarations: [LayoutComponent, NavigationPanelComponent, FilterComponent],
    imports: [
        RouterModule,
        CommonModule,
        TaigaModule,
        ReactiveFormsModule,
        NgxSpinnerModule,
    ],
    exports: [LayoutComponent],
    providers: [],
})
export class LayoutModule {}
