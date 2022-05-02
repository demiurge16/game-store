import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './game-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlatformsPipe } from './platforms.pipe';
import { GenresPipe } from './genres.pipe';

@NgModule({
  declarations: [
    GameListComponent,
    PlatformsPipe,
    GenresPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    NgbModule
  ],
  exports: [
    GameListComponent
  ]
})
export class GameListModule { }
