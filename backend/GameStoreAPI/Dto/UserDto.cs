using GameStoreAPI.Models;

namespace GameStoreAPI.Dto
{
    public class UserShortViewDto
    {
        public long Id { get; set; }
        public string Username { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }

    public static class UserExtensions
    {
        public static UserShortViewDto ToShortView(this User user)
        {
            return new UserShortViewDto
            {
                Id = user.Id,
                Username = user.Username,
                FirstName = user.FirstName,
                LastName = user.LastName
            };
        }
    }
}
