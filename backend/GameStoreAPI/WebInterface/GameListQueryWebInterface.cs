using GameStoreAPI.Queries;
using System;

namespace GameStoreAPI.WebInterface
{
    public class GameListQueryWebInterface
    {
        public string SortDirection { get; set; }
        public string SortField { get; set; }
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

    public static class GameListQueryExtensions
    {
        public static GameListQuery ToQuery(this GameListQueryWebInterface gameListQueryWebInterface)
        {
            return new GameListQuery
            {
                SortDirection = SortDirection.FromString(gameListQueryWebInterface.SortDirection),
                SortField = GameListSortField.FromString(gameListQueryWebInterface.SortField),
                Page = gameListQueryWebInterface.Page,
                PageSize = gameListQueryWebInterface.PageSize,
                TitleLike = gameListQueryWebInterface.TitleLike,
                ReleaseDateFrom = gameListQueryWebInterface.ReleaseDateFrom,
                ReleaseDateTo = gameListQueryWebInterface.ReleaseDateTo,
                ScoreFrom = gameListQueryWebInterface.ScoreFrom,
                ScoreTo = gameListQueryWebInterface.ScoreTo,
                PriceFrom = gameListQueryWebInterface.PriceFrom,
                PriceTo = gameListQueryWebInterface.PriceTo,
                PlatformId = gameListQueryWebInterface.PlatformId,
                PublisherId = gameListQueryWebInterface.PublisherId,
                DeveloperId = gameListQueryWebInterface.DeveloperId,
                GenreId = gameListQueryWebInterface.GenreId
            };
        }
    }
}
