using Microsoft.EntityFrameworkCore;
using ProductWeb.Models;

namespace ProductWeb.Repositories
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>().ToTable("products", "public");
            modelBuilder.Entity<Product>().Property(p => p.ProductName).HasColumnName("ProductName");
            modelBuilder.Entity<Product>().Property(p => p.Price).HasColumnName("Price");
            modelBuilder.Entity<Product>().Property(p => p.StockQuantity).HasColumnName("StockQuantity");
            modelBuilder.Entity<Product>().Property(p => p.CreationDate).HasColumnName("creationDate");
            modelBuilder.Entity<Product>().Property(p => p.ProductGroupId).HasColumnName("ProductGroupId");
            modelBuilder.Entity<Product>().HasKey(p => p.Id);
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
        }

    }
}
