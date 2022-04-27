import { Component, OnInit } from '@angular/core';
import { GameListService } from './game-list.service';
import { Game } from './models/game';
import { GameListFilters } from './models/game-list-filters';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  games: Game[] = [];

  filters = new GameListFilters();

  constructor(private gameListService: GameListService) { }

  ngOnInit(): void {
    this.gameListService.getGames().subscribe(
      (response: any) => {
        this.games = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  search() {
    console.log(this.filters.asFilterStringArray());

    this.gameListService.getGames(this.filters).subscribe(
      (response: any) => {
        this.games = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
