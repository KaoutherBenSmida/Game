import { ApplicationConfig, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

export const routes: Routes = [
    { path: '', component: AppComponent }, // Route par défaut (page d'accueil)
    /*{ path: 'gamecomponent', component: GameComponent } // Route pour la page "À propos"*/
];

@NgModule({
    imports: [RouterModule.forRoot(routes),
        HttpClientModule
    ],
    exports: [RouterModule,
        HttpClientModule
    ]
})
export class AppRoutingModule { }