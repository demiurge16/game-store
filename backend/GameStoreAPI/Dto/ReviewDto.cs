using GameStoreAPI.Models;

namespace GameStoreAPI.Dto
{
    public class ReviewShortViewDto
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public decimal Score { get; set; }
        public UserShortViewDto User { get; set; }
    }

    public static class ReviewExtensions
    {
        public static ReviewShortViewDto ToShortView(this Review review)
        {
            return new ReviewShortViewDto
            {
                Id = review.Id,
                Title = review.Title,
                Content = review.Content,
                Score = review.Score,
                User = review.User.ToShortView()
            };
        }
    }
}
