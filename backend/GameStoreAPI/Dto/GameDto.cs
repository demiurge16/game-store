using GameStoreAPI.Models;

using System;
using System.Collections.Generic;
using System.Linq;

namespace GameStoreAPI.Dto
{
    public class GameViewDto
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public string Summary { get; set; }
        public string Description { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string Rating { get; set; }
        public decimal Price { get; set; }
        public decimal Score { get; set; }

        public PublisherViewDto Publisher { get; set; }
        public DeveloperViewDto Developer { get; set; }

        public IList<PlatformViewDto> Platforms { get; set; }
        public IList<GenreViewDto> Genres { get; set; }
        public IList<ReviewShortViewDto> Reviews { get; set; }
    }
    
    public class GameCreateDto
    {
        public string Title { get; set; }
        public string Thumbnail { get; set; }
        public string Summary { get; set; }
        public string Description { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string Rating { get; set; }
        public decimal Price { get; set; }
        public decimal Score { get; set; }

        public long PlatformId { get; set; }
        public long PublisherId { get; set; }
        public long DeveloperId { get; set; }

        public IList<long> GenreIds { get; set; }
    }

    public class GameUpdateDto
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public string Thumbnail { get; set; }
        public string Summary { get; set; }
        public string Description { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string Rating { get; set; }
        public decimal Price { get; set; }
        public decimal Score { get; set; }

        public long PlatformId { get; set; }
        public long PublisherId { get; set; }
        public long DeveloperId { get; set; }

        public IList<long> GenreIds { get; set; }
    }

    public static class GameExtensions
    {
        public static GameViewDto ToView(this Game game)
        {
            return new GameViewDto
            {
                Id = game.Id,
                Title = game.Title,
                Summary = game.Summary,
                Description = game.Description,
                ReleaseDate = game.ReleaseDate,
                Rating = game.Rating,
                Price = game.Price,
                Score = game.Score,
                Publisher = game.Publisher.ToView(),
                Developer = game.Developer.ToView(),
                Platforms = game.Platforms.Select(p => p.ToView()).ToList(),
                Genres = game.Genres.Select(g => g.ToView()).ToList(),
                Reviews = game.Reviews.Select(r => r.ToShortView()).ToList()
            };
        }
    }
}
