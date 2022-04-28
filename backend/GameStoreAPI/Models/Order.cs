using System;
using System.Collections.Generic;

namespace GameStoreAPI.Models
{
    public class Order
    {
        public long Id { get; set; }
        public DateTime OrderDate { get; set; }
        public decimal Total { get; set; }
        public IList<OrderItem> OrderItems { get; set; }
        public User User { get; set; }
    }
}
