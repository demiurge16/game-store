using GameStoreAPI.Models;

namespace GameStoreAPI.Dto
{
    public class DeveloperViewDto
    {
        public long Id { get; set; }
        public string Name { get; set; }
    }

    public static class DeveloperExtensions
    {
        public static DeveloperViewDto ToView(this Developer developer)
        {
            return new DeveloperViewDto
            {
                Id = developer.Id,
                Name = developer.Name
            };
        }
    }
}
