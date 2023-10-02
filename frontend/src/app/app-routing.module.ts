import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/authGuard';

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
                path: 'Login',
                loadChildren: () =>
                    import('../app/page/login/login.module').then(
                        (m) => m.LoginModule,
                    ),
            },
            {
                path: 'Folders',
                loadChildren: () =>
                    import('../app/page/folders/folders.module').then(
                        (m) => m.FoldersModule,
                    ),
                canActivate: [AuthGuard],
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
