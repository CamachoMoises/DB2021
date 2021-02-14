import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { DefaultComponent } from './default.component';
import { MainComponent } from './main/main.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [DefaultComponent, MainComponent],
  imports: [
    CommonModule,
    RouterModule,

    SharedModule,

    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
  ],
})
export class DefaultModule {}
