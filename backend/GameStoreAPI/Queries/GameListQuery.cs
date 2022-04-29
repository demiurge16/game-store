using GameStoreAPI.Models;
using System;
using System.Linq;
using System.Linq.Expressions;

namespace GameStoreAPI.Queries
{
    public class GameListQuery
    {
        public SortDirection SortDirection { get; set; }
        public GameListSortField? SortField { get; set; }
        public long? Page { get; set; }
        public long? PageSize { get; set; }
        public string TitleLike { get; set; }
        public DateTime? ReleaseDateFrom { get; set; }
        public DateTime? ReleaseDateTo { get; set; }
        public decimal? ScoreFrom { get; set; }
        public decimal? ScoreTo { get; set; }
        public decimal? PriceFrom { get; set; }
        public decimal? PriceTo { get; set; }
        public long? PlatformId { get; set; }
        public long? PublisherId { get; set; }
        public long? DeveloperId { get; set; }
        public long? GenreId { get; set; }
    }

    public class GameListSortField
    {
        public static readonly GameListSortField Title = new GameListSortField("title");
        public static readonly GameListSortField ReleaseDate = new GameListSortField("releaseDate");
        public static readonly GameListSortField Score = new GameListSortField("score");
        public static readonly GameListSortField Price = new GameListSortField("price");

        private GameListSortField(string field)
        {
            Field = field;
        }

        public string Field { get; private set; }

        public static GameListSortField FromString(string field)
        {
            if (field == null)
            {
                throw new ArgumentNullException(nameof(field));
            }

            if (field.Equals(Title.Field, StringComparison.OrdinalIgnoreCase))
            {
                return Title;
            }

            if (field.Equals(ReleaseDate.Field, StringComparison.OrdinalIgnoreCase))
            {
                return ReleaseDate;
            }

            if (field.Equals(Score.Field, StringComparison.OrdinalIgnoreCase))
            {
                return Score;
            }

            if (field.Equals(Price.Field, StringComparison.OrdinalIgnoreCase))
            {
                return Price;
            }

            throw new ArgumentException($"Invalid sort field: {field}");
        }
    }

    public class GameListQuerySortField<T>
    {
        public static readonly GameListQuerySortField<string> Title = new GameListQuerySortField<string>(g => g.Title);
        public static readonly GameListQuerySortField<DateTime> ReleaseDate = new GameListQuerySortField<DateTime>(g => g.ReleaseDate);
        public static readonly GameListQuerySortField<decimal> Score = new GameListQuerySortField<decimal>(g => g.Score);
        public static readonly GameListQuerySortField<decimal> Price = new GameListQuerySortField<decimal>(g => g.Price);

        private readonly Expression<Func<Game, T>> keySelector;

        public Expression KeySelector { get => keySelector; }

        private GameListQuerySortField(Expression<Func<Game, T>> keySelector)
        {
            this.keySelector = keySelector;
        }
    }

    public static class GameListQueryExtensions
    {
        public static IQueryable<Game> UseQuery(this IQueryable<Game> games, GameListQuery query)
        {
            if (query.SortDirection != null && query.SortField != null)
            {
                if (query.SortDirection == SortDirection.Ascending)
                {
                    if (query.SortField == GameListSortField.Title)
                    {
                        games = games.OrderBy(g => g.Title).ThenBy(g => g.Id);
                    }
                    else if (query.SortField == GameListSortField.ReleaseDate)
                    {
                        games = games.OrderBy(g => g.ReleaseDate).ThenBy(g => g.Id);
                    }
                    else if (query.SortField == GameListSortField.Score)
                    {
                        games = games.OrderBy(g => g.Score).ThenBy(g => g.Id);
                    }
                    else if (query.SortField == GameListSortField.Price)
                    {
                        games = games.OrderBy(g => g.Price).ThenBy(g => g.Id);
                    }
                }
                else
                {
                    if (query.SortField == GameListSortField.Title)
                    {
                        games = games.OrderByDescending(g => g.Title).ThenBy(g => g.Id);
                    }
                    else if (query.SortField == GameListSortField.ReleaseDate)
                    {
                        games = games.OrderByDescending(g => g.ReleaseDate).ThenBy(g => g.Id);
                    }
                    else if (query.SortField == GameListSortField.Score)
                    {
                        games = games.OrderByDescending(g => g.Score).ThenBy(g => g.Id);
                    }
                    else if (query.SortField == GameListSortField.Price)
                    {
                        games = games.OrderByDescending(g => g.Price).ThenBy(g => g.Id);
                    }
                }
            }

            if (query.Page != null && query.PageSize != null)
            {
                games = games.Skip((int)(query.Page.Value * query.PageSize.Value));
            }

            if (query.TitleLike != null)
            {
                games = games.Where(g => g.Title.Contains(query.TitleLike));
            }

            if (query.ReleaseDateFrom != null)
            {
                games = games.Where(g => g.ReleaseDate >= query.ReleaseDateFrom);
            }

            if (query.ReleaseDateTo != null)
            {
                games = games.Where(g => g.ReleaseDate <= query.ReleaseDateTo);
            }

            if (query.ScoreFrom != null)
            {
                games = games.Where(g => g.Score >= query.ScoreFrom);
            }

            if (query.ScoreTo != null)
            {
                games = games.Where(g => g.Score <= query.ScoreTo);
            }

            if (query.PriceFrom != null)
            {
                games = games.Where(g => g.Price >= query.PriceFrom);
            }

            if (query.PriceTo != null)
            {
                games = games.Where(g => g.Price <= query.PriceTo);
            }

            if (query.PlatformId != null)
            {
                games = games.Where(g => g.PlatformId == query.PlatformId);
            }

            if (query.PublisherId != null)
            {
                games = games.Where(g => g.PublisherId == query.PublisherId);
            }

            if (query.DeveloperId != null)
            {
                games = games.Where(g => g.DeveloperId == query.DeveloperId);
            }

            if (query.GenreId != null)
            {
                games = games.Where(g => g.Genres.Any(g => g.Id == query.GenreId));
            }

            return games;
        }
    }
}
