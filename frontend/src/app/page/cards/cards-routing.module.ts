import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './containers/cards/cards.component';

const routes: Routes = [
    {
        path: '',
        component: CardsComponent,
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CardsRoutingModule {}
