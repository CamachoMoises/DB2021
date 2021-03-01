import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { DefaultComponent } from './default.component';
import { MainComponent } from './main/main.component';
import { NBAPlayersComponent } from './nba-players/nba-players.component';
import { PrimFormComponent } from './registros/prim-form/prim-form.component';
import { NbaDataService } from '../../shared/nba-data.service';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RegistrosComponent } from './registros/registros.component';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    DefaultComponent,
    MainComponent,
    NBAPlayersComponent,
    RegistrosComponent,
    PrimFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,

    SharedModule,

    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatRippleModule,
    MatDividerModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatTreeModule,
    MatBadgeModule,
    MatGridListModule,
    MatRadioModule,
    MatDatepickerModule,
    MatTooltipModule,
    MatIconModule,
    MatStepperModule,
    MatMomentDateModule,

    FlexLayoutModule,
  ],
  providers: [NbaDataService],
})
export class DefaultModule {}
