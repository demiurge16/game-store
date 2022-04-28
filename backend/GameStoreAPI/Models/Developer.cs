using System.Collections.Generic;

namespace GameStoreAPI.Models
{
    public class Developer
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public IList<Game> Games { get; set; }
    }
}
