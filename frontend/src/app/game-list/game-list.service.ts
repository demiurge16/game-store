import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from './models/game';
import { GameListFilters } from './models/game-list-filters';

@Injectable({
  providedIn: 'root'
})
export class GameListService {

  constructor(private http: HttpClient) { }

  getGames(filters: GameListFilters = new GameListFilters()): Observable<Game[]> {
    return this.http.get<Game[]>('/api/games');
  }

  getGame(id: number): Observable<Game> {
    return this.http.get<Game>(`/api/games/${id}`);
  }

  addGame(game: Game): Observable<Game> {
    return this.http.post<Game>('/api/games', game);
  }

  updateGame(game: Game): Observable<Game> {
    return this.http.put<Game>(`/api/games/${game.id}`, game);
  }

  deleteGame(id: number): Observable<Game> {
    return this.http.delete<Game>(`/api/games/${id}`);
  }
}
