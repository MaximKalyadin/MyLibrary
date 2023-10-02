import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TUI_SANITIZER,
    TUI_MODE,
} from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LayoutModule } from './layout/layout.module';
import { FilterStoreService } from './layout/data-services/filter-store.service';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: !isDevMode(),
        }),
        NgxSpinnerModule,
        BrowserAnimationsModule,
        TuiRootModule,
        TuiDialogModule,
        TuiAlertModule,
        LayoutModule,
    ],
    providers: [
        { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
        { provide: TUI_MODE, useValue: 'onDark' },
        FilterStoreService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
