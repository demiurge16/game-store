namespace GameStoreAPI.Models
{
    public class OrderItem
    {
        public long Id { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
        public Game Game { get; set; }
        public long GameId { get; set; }
        public Order Order { get; set; }
        public long OrderId { get; set; }
    }
}
