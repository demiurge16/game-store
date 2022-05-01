using System;
using System.Collections.Generic;

namespace GameStoreAPI.Models
{
    public class Game
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public string Summary { get; set; }
        public string Description { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string Rating { get; set; }
        public decimal Price { get; set; }
        public decimal Score { get; set; }

        public Publisher Publisher { get; set; }
        public long PublisherId { get; set; }
        public Developer Developer { get; set; }
        public long DeveloperId { get; set; }

        public IList<Platform> Platforms { get; set; }
        public IList<Genre> Genres { get; set; }
        public IList<Review> Reviews { get; set; }
    }
}
