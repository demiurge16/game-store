export class Game {
  constructor(
    public id: number,
    public title: string,
    public thumbnail: string,
    public summary: string,
    public description: string,
    public publisher: string,
    public developer: string,
    public releaseDate: string,
    public genres: string[],
    public rating: string,
    public price: number,
    public score: number
  ) { }
}
