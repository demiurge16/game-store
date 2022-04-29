using GameStoreAPI.Models;
using System;
using System.Linq;
using System.Linq.Expressions;

namespace GameStoreAPI.Queries
{
    public class SortDirection
    {
        public static readonly SortDirection Ascending = new SortDirection("asc");
        public static readonly SortDirection Descending = new SortDirection("desc");

        private SortDirection(string direction)
        {
            Direction = direction;
        }

        public string Direction { get; private set; }

        public static SortDirection FromString(string direction)
        {
            if (direction == null)
            {
                throw new ArgumentNullException(nameof(direction));
            }

            if (direction.Equals(Ascending.Direction, StringComparison.OrdinalIgnoreCase))
            {
                return Ascending;
            }

            if (direction.Equals(Descending.Direction, StringComparison.OrdinalIgnoreCase))
            {
                return Descending;
            }

            throw new ArgumentException($"Invalid sort direction: {direction}");
        }

    }
}
