using System.Collections.Generic;

namespace GameStoreAPI.Models
{
    public class Genre
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public IList<Game> Games { get; set; }
    }
}
