namespace GameStoreAPI.Models
{
    public class Review
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public decimal Score { get; set; }
        public Game Game { get; set; }
        public User User { get; set; }
    }
}
