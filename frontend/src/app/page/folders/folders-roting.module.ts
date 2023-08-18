import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoldersComponent } from './containers/folders/folders.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: FoldersComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FoldersRotingModule {}
