using GameStoreAPI.Models;

namespace GameStoreAPI.Dto
{
    public class PlatformViewDto
    {
        public long Id { get; set; }
        public string Name { get; set; }
    }

    public class CreatePlatformDto
    {
        public string Name { get; set; }
    }

    public class UpdatePlatformDto
    {
        public string Name { get; set; }
    }

    public static class PlatformExtensions
    {
        public static PlatformViewDto ToView(this Platform platform)
        {
            return new PlatformViewDto
            {
                Id = platform.Id,
                Name = platform.Name
            };
        }
    }
}
