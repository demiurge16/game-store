import { Developer } from "./developer"
import { Genre } from "./genre"
import { Platform } from "./platform"
import { Publisher } from "./publisher"
import { Review } from "./review"

export class Game {
  constructor(
    public id: number,
    public title: string,
    public summary: string,
    public description: string,
    public releaseDate: string,
    public rating: string,
    public price: number,
    public score: number,
    public publisher: Publisher,
    public developer: Developer,
    public platforms: Platform[],
    public genres: Genre[],
    public reviews: Review[]
  ) {}
}
