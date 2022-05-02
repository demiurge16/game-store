import { Component, OnInit } from '@angular/core';
import { GameListService } from './game-list.service';
import { Developer } from './models/developer';
import { Game } from './models/game';
import { GameListQuery } from './models/game-list-query';
import { Genre } from './models/genre';
import { Platform } from './models/platform';
import { Publisher } from './models/publisher';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  games: Game[] = [];
  platforms: Platform[] = [];
  publishers: Publisher[] = [];
  developers: Developer[] = [];
  genres: Genre[] = [];

  query = new GameListQuery();

  constructor(private gameListService: GameListService) { }

  ngOnInit(): void {
    this.gameListService.getGames(this.query).subscribe(
      (response: any) => {
        this.games = response;
      },
      (error: any) => {
        console.log(error);
      }
    );

    this.gameListService.getPlatforms().subscribe(
      (response: any) => {
        this.platforms = response;
      },
      (error: any) => {
        console.log(error);
      }
    );

    this.gameListService.getPublishers().subscribe(
      (response: any) => {
        this.publishers = response;
      },
      (error: any) => {
        console.log(error);
      }
    );

    this.gameListService.getDevelopers().subscribe(
      (response: any) => {
        this.developers = response;
      }
    );

    this.gameListService.getGenres().subscribe(
      (response: any) => {
        this.genres = response;
      }
    );
  }

  search() {
    this.gameListService.getGames(this.query).subscribe(
      (response: any) => {
        this.games = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
