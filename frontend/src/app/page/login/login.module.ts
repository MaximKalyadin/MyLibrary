import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { TaigaModule } from '../../taiga/taiga.module';
import { LoginComponent } from './containers/login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginFormService } from './data-services/login-form.service';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        SharedModule,
        TaigaModule,
        LoginRoutingModule,
    ],
    providers: [LoginFormService],
})
export class LoginModule {}
