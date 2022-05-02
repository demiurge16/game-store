import { User } from "./user";

export class Review {
  constructor(
    public id: number,
    public title: string,
    public content: string,
    public score: number,
    public user: User,
  ) {}
}