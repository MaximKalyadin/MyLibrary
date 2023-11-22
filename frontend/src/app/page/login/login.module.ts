import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaigaModule } from '../../taiga/taiga.module';
import { LoginComponent } from './containers/login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginFormService } from './data-services/login-form.service';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        TaigaModule,
        LoginRoutingModule,
        NgxUiLoaderModule,
    ],
    providers: [LoginFormService],
})
export class LoginModule {}
