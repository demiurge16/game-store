import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from './models/game';
import { GameListQuery } from './models/game-list-query';
import { environment } from '@environment';
import { Platform } from './models/platform';
import { Publisher } from './models/publisher';
import { Developer } from './models/developer';
import { Genre } from './models/genre';

@Injectable({
  providedIn: 'root'
})
export class GameListService {

  constructor(private http: HttpClient) { }

  getGames(query: GameListQuery): Observable<Game[]> {
    return this.http.get<Game[]>(`${environment.apiUrl}/games`, {
      params: query.toHttpParams()
    });
  }

  getGame(id: number): Observable<Game> {
    return this.http.get<Game>(`${environment.apiUrl}/games/${id}`);
  }

  addGame(game: Game): Observable<Game> {
    return this.http.post<Game>(`${environment.apiUrl}/games`, game);
  }

  updateGame(game: Game): Observable<Game> {
    return this.http.put<Game>(`${environment.apiUrl}/games/${game.id}`, game);
  }

  deleteGame(id: number): Observable<Game> {
    return this.http.delete<Game>(`${environment.apiUrl}/games/${id}`);
  }

  getPlatforms(): Observable<Platform[]> {
    return this.http.get<Platform[]>(`${environment.apiUrl}/platforms`);
  }

  getPublishers(): Observable<Publisher[]> {
    return this.http.get<Publisher[]>(`${environment.apiUrl}/publishers`);
  }

  getDevelopers(): Observable<Developer[]> {
    return this.http.get<Developer[]>(`${environment.apiUrl}/developers`);
  }

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(`${environment.apiUrl}/genres`);
  }
}
