import { Game } from "./game";

export class GameListFilters {
  constructor(
    public title: FilterLike = new FilterLike("title", null),
    public publisher: FilterLike = new FilterLike("publisher", null),
    public developer: FilterLike = new FilterLike("developer", null),
    public releaseDateFrom: FilterGreaterThan<string> = new FilterGreaterThan<string>("releaseDate", null),
    public releaseDateTo: FilterLessThan<string> = new FilterLessThan<string>("releaseDate", null),
    public priceFrom: FilterGreaterThan<number> = new FilterGreaterThan<number>("price", null),
    public priceTo: FilterLessThan<number> = new FilterLessThan<number>("priceTo", null),
    public scoreFrom: FilterGreaterThan<number> = new FilterGreaterThan<number>("scoreFrom", null),
    public scoreTo: FilterLessThan<number> = new FilterLessThan<number>("scoreTo", null),
    // TODO - implement multiselect filter
    // public genres: FilterEquals<string>[] = []
  ) { }

  cleanFilters() {
    this.title.cleanFilter();
    this.publisher.cleanFilter();
    this.developer.cleanFilter();
    this.releaseDateFrom.cleanFilter();
    this.releaseDateTo.cleanFilter();
    this.priceFrom.cleanFilter();
    this.priceTo.cleanFilter();
    this.scoreFrom.cleanFilter();
    this.scoreTo.cleanFilter();
  }

  cleanFilter(filter: string) {
    switch (filter) {
      case "title":
        this.title.cleanFilter();
        break;
      case "publisher":
        this.publisher.cleanFilter();
        break;
      case "developer":
        this.developer.cleanFilter();
        break;
      case "releaseDateFrom":
        this.releaseDateFrom.cleanFilter();
        break;
      case "releaseDateTo":
        this.releaseDateTo.cleanFilter();
        break;
      case "priceFrom":
        this.priceFrom.cleanFilter();
        break;
      case "priceTo":
        this.priceTo.cleanFilter();
        break;
      case "scoreFrom":
        this.scoreFrom.cleanFilter();
        break;
      case "scoreTo":
        this.scoreTo.cleanFilter();
        break;
      default:
        break;
    }
  }

  matches(game: Game): boolean {
    let filters = this.asArray().filter(f => f.isFilterActive());

    if (filters.length === 0) {
      return true;
    }

    return filters.every(f => f.matches(propertyValueByName(game, f.name)));
  }

  asArray(): Filter<any>[] {
    return [
      this.title,
      this.publisher,
      this.developer,
      this.releaseDateFrom,
      this.releaseDateTo,
      this.priceFrom,
      this.priceTo,
      this.scoreFrom,
      this.scoreTo
    ];
  }

  asFilterStringArray(): string[] {
    let filterStringArray: string[] = [];
    if (this.title.isFilterActive()) {
      filterStringArray.push(this.title.asFilterString());
    }
    if (this.publisher.isFilterActive()) {
      filterStringArray.push(this.publisher.asFilterString());
    }
    if (this.developer.isFilterActive()) {
      filterStringArray.push(this.developer.asFilterString());
    }
    if (this.releaseDateFrom.isFilterActive()) {
      filterStringArray.push(this.releaseDateFrom.asFilterString());
    }
    if (this.releaseDateTo.isFilterActive()) {
      filterStringArray.push(this.releaseDateTo.asFilterString());
    }
    if (this.priceFrom.isFilterActive()) {
      filterStringArray.push(this.priceFrom.asFilterString());
    }
    if (this.priceTo.isFilterActive()) {
      filterStringArray.push(this.priceTo.asFilterString());
    }
    if (this.scoreFrom.isFilterActive()) {
      filterStringArray.push(this.scoreFrom.asFilterString());
    }
    if (this.scoreTo.isFilterActive()) {
      filterStringArray.push(this.scoreTo.asFilterString());
    }
    return filterStringArray;
  }
}

type Nullable<T> = T | null;

abstract class Filter<TValue> {
  abstract get filterType(): FilterType;

  constructor(public readonly name: string, public value: Nullable<TValue>) { }

  abstract matches(value: Nullable<TValue>): boolean;

  cleanFilter() {
    this.value = null;
  }

  isFilterActive(): boolean {
    return this.value !== null;
  }

  asFilterString(): string {
    if (this.value === null) {
      return "";
    }

    return `${this.name}${this.filterType}${this.value}`;
  }
}

class FilterEquals<TValue> extends Filter<TValue> {
  get filterType() { return FilterType.Equals; }

  matches(value: Nullable<TValue>): boolean {
    return this.value === value;
  }
}

class FilterLike extends Filter<string> {
  get filterType() { return FilterType.Like; }

  matches(value: Nullable<string>): boolean {
    return this.value === null || value === null || value.toString().toLowerCase().includes(this.value.toString().toLowerCase());
  }
}

class FilterLessThan<TValue> extends Filter<TValue> {
  get filterType() { return FilterType.LessThan; }

  matches(value: Nullable<TValue>): boolean {
    return this.value === null || value === null || value < this.value;
  }
}

class FilterGreaterThan<TValue> extends Filter<TValue> {
  get filterType() { return FilterType.GreaterThan; }

  matches(value: Nullable<TValue>): boolean {
    return this.value === null || value === null || value > this.value;
  }
}

enum FilterType {
  Equals = "=",
  Like = "~",
  LessThan = "<",
  GreaterThan = ">"
}

function propertyValueByName(game: Game, propertyName: string): any {
  switch (propertyName) {
    case "title":
      return game.title;
    case "publisher":
      return game.publisher;
    case "developer":
      return game.developer;
    case "releaseDate":
      return game.releaseDate;
    case "price":
      return game.price;
    case "score":
      return game.score;
    default:
      return null;
  }
}
