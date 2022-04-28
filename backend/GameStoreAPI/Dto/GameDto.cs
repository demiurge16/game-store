using GameStoreAPI.Models;

using System;
using System.Collections.Generic;

namespace GameStoreAPI.Dto
{   
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
}
