import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'Folders',
                pathMatch: 'full',
            },
            {
                path: 'Folders',
                loadChildren: () =>
                    import('../app/page/folders/folders.module').then(
                        (m) => m.FoldersModule,
                    ),
            },
        ],
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
