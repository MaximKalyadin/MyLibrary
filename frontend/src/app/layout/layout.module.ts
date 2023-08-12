import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './containers/layout/layout.component';
import { NavigationPanelComponent } from './components/navigation-panel/navigation-panel.component';
import { TaigaModule } from '../taiga/taiga.module';

@NgModule({
    declarations: [LayoutComponent, NavigationPanelComponent],
    imports: [RouterModule, CommonModule, TaigaModule],
    exports: [LayoutComponent],
    providers: [],
})
export class LayoutModule {}
