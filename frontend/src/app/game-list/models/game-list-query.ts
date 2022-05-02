import { HttpParams } from "@angular/common/http";

type Nullable<T> = T | null;
class DatePickerValue {
  constructor(public year: number, public month: number, public day: number) { }
};

export class GameListQuery {
  constructor(
    public sortDirection: Nullable<string> = "asc",
    public sortField: Nullable<string> = "title",
    public page: Nullable<number> = 0,
    public pageSize: Nullable<number> = 20,
    public titleLike: Nullable<string> = null,
    public releaseDateFrom: Nullable<DatePickerValue> = null,
    public releaseDateTo: Nullable<DatePickerValue> = null,
    public scoreFrom: Nullable<number> = null,
    public scoreTo: Nullable<number> = null,
    public priceFrom: Nullable<number> = null,
    public priceTo: Nullable<number> = null,
    public platformId: Nullable<number | string> = null,
    public publisherId: Nullable<number | string> = null,
    public developerId: Nullable<number | string> = null,
    public genreId: Nullable<number | string> = null
  ) { }

  resetToDefaults() {
    this.sortDirection = "asc";
    this.sortField = "title";
    this.page = 0;
    this.pageSize = 20;
    this.titleLike = null;
    this.releaseDateFrom = null;
    this.releaseDateTo = null;
    this.scoreFrom = null;
    this.scoreTo = null;
    this.priceFrom = null;
    this.priceTo = null;
    this.platformId = null;
    this.publisherId = null;
    this.developerId = null;
    this.genreId = null;
  }

  cleanFilters() {
    this.titleLike = null;
    this.releaseDateFrom = null;
    this.releaseDateTo = null;
    this.scoreFrom = null;
    this.scoreTo = null;
    this.priceFrom = null;
    this.priceTo = null;
    this.platformId = null;
    this.publisherId = null;
    this.developerId = null;
    this.genreId = null;
  }

  cleanFilter(filter: string) {
    switch (filter) {
      case "titleLike":
        this.titleLike = null;
        break;
      case "releaseDateFrom":
        this.releaseDateFrom = null;
        break;
      case "releaseDateTo":
        this.releaseDateTo = null;
        break;
      case "scoreFrom":
        this.scoreFrom = null;
        break;
      case "scoreTo":
        this.scoreTo = null;
        break;
      case "priceFrom":
        this.priceFrom = null;
        break;
      case "priceTo":
        this.priceTo = null;
        break;
      case "platformId":
        this.platformId = null;
        break;
      case "publisherId":
        this.publisherId = null;
        break;
      case "developerId":
        this.developerId = null;
        break;
      case "genreId":
        this.genreId = null;
        break;
      default:
        break;
    }
  }

  toHttpParams(): HttpParams {
    let params = new HttpParams();

    console.log(this);

    if (this.sortDirection) {
      params = params.set("sortDirection", this.sortDirection);
    }

    if (this.sortField) {
      params = params.set("sortField", this.sortField);
    }

    if (this.page) {
      params = params.set("page", this.page.toString());
    }

    if (this.pageSize) {
      params = params.set("pageSize", this.pageSize.toString());
    }

    if (this.titleLike) {
      params = params.set("titleLike", this.titleLike);
    }

    if (this.releaseDateFrom) {
      let dateString = `${this.releaseDateFrom.year}-${this.releaseDateFrom.month}-${this.releaseDateFrom.day}`;
      params = params.set("releaseDateFrom", dateString);
    }

    if (this.releaseDateTo) {
      let dateString = `${this.releaseDateTo.year}-${this.releaseDateTo.month}-${this.releaseDateTo.day}`;
      params = params.set("releaseDateTo", dateString);
    }

    if (this.scoreFrom) {
      params = params.set("scoreFrom", this.scoreFrom.toString());
    }

    if (this.scoreTo) {
      params = params.set("scoreTo", this.scoreTo.toString());
    }

    if (this.priceFrom) {
      params = params.set("priceFrom", this.priceFrom.toString());
    }

    if (this.priceTo) {
      params = params.set("priceTo", this.priceTo.toString());
    }

    if (this.platformId && this.platformId !== "null") {
      params = params.set("platformId", this.platformId.toString());
    }

    if (this.publisherId && this.publisherId !== "null") {
      params = params.set("publisherId", this.publisherId.toString());
    }

    if (this.developerId && this.developerId !== "null") {
      params = params.set("developerId", this.developerId.toString());
    }

    if (this.genreId && this.genreId !== "null") {
      params = params.set("genreId", this.genreId.toString());
    }

    return params;
  }
}
