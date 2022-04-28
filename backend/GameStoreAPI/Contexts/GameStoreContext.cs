using GameStoreAPI.Models;

using Microsoft.EntityFrameworkCore;
using System;

namespace GameStoreAPI.Contexts
{
    public class GameStoreContext : DbContext
    {
        public GameStoreContext(DbContextOptions<GameStoreContext> options) : base(options)
        {
        }

        public DbSet<Game> Games { get; set; }
        public DbSet<Genre> Genres { get; set; }
        public DbSet<Platform> Platforms { get; set; }
        public DbSet<Publisher> Publishers { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<Review> Reviews { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Game>().ToTable("Games");
            modelBuilder.Entity<Genre>().ToTable("Genres");
            modelBuilder.Entity<Platform>().ToTable("Platforms");
            modelBuilder.Entity<Publisher>().ToTable("Publishers");
            modelBuilder.Entity<User>().ToTable("Users");
            modelBuilder.Entity<Order>().ToTable("Orders");
            modelBuilder.Entity<OrderItem>().ToTable("OrderItems");
            modelBuilder.Entity<Review>().ToTable("Reviews");

            modelBuilder.Entity<Game>().HasMany(g => g.Genres).WithMany(g => g.Games);
            modelBuilder.Entity<Game>().HasOne(g => g.Platform).WithMany(g => g.Games).HasForeignKey(g => g.PlatformId);
            modelBuilder.Entity<Game>().HasOne(g => g.Publisher).WithMany(g => g.Games).HasForeignKey(g => g.PublisherId);
            modelBuilder.Entity<Game>().HasMany(g => g.Reviews).WithOne(g => g.Game);
            modelBuilder.Entity<OrderItem>().HasOne(oi => oi.Order).WithMany(o => o.OrderItems).HasForeignKey(oi => oi.OrderId);
        }
    }
}
