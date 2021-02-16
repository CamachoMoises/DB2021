import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NbaDataService } from 'src/app/shared/nba-data.service';
import { DataTeam } from 'src/app/shared/data-team';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-nba-players',
  templateUrl: './nba-players.component.html',
  styleUrls: ['./nba-players.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.5, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class NBAPlayersComponent implements OnInit {
  displayedColumns = [
    'id',
    'first_name',
    'last_name',
    'height_inches',
    'height_feet',
    'weight_pounds',
    'position',
  ];

  public metaData: DataTeam[] = [];

  constructor(private Nbaservice: NbaDataService) {}

  ngOnInit() {
    this.Nbaservice.getAllPlayes().subscribe((res) => {
      this.metaData = res.data;
    });
  }

  onDetail(id: any) {
    console.log(id);
  }

  refreshData() {}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //this.metaData.filter = filterValue.trim().toLowerCase();
  }
}
