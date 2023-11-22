import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaigaModule } from '../../taiga/taiga.module';
import { CardsComponent } from './containers/cards/cards.component';
import { CardsRoutingModule } from './cards-routing.module';
import { CardComponent } from './components/card/card.component';

@NgModule({
    declarations: [CardsComponent, CardComponent],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        TaigaModule,
        CardsRoutingModule,
    ],
    providers: [],
})
export class CardsModule {}
