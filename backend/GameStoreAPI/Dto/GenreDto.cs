using GameStoreAPI.Models;

namespace GameStoreAPI.Dto
{
    public class GenreViewDto
    {
        public long Id { get; set; }
        public string Name { get; set; }
    }

    public static class GenreViewDtoExtensions
    {
        public static GenreViewDto ToView(this Genre genre)
        {
            return new GenreViewDto
            {
                Id = genre.Id,
                Name = genre.Name
            };
        }
    }
}
