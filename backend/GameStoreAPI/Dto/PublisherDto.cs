using GameStoreAPI.Models;

namespace GameStoreAPI.Dto
{
    public class PublisherViewDto
    {
        public long Id { get; set; }
        public string Name { get; set; }
    }

    public class CreatePublisherDto
    {
        public string Name { get; set; }
    }

    public class UpdatePublisherDto
    {
        public string Name { get; set; }
    }

    public static class PublisherExtensions
    {
        public static PublisherViewDto ToView(this Publisher publisher)
        {
            return new PublisherViewDto
            {
                Id = publisher.Id,
                Name = publisher.Name
            };
        }
    }
}
