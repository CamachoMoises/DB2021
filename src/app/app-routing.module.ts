import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DefaultComponent } from './layout/default/default.component';
import { MainComponent } from './layout/default/main/main.component';
import { NBAPlayersComponent } from './layout/default/nba-players/nba-players.component';
import { RegistrosComponent } from './layout/default/registros/registros.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: MainComponent,
      },
      {
        path: 'NBA_playes',
        component: NBAPlayersComponent,
      },
      {
        path: 'Resgistros',
        component: RegistrosComponent,
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
