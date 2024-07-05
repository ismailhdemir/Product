namespace ProductWeb.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string ProductName { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public int StockQuantity { get; set; }
        public DateTime CreationDate { get; set; } = DateTime.Now;
        public int ProductGroupId { get; set; }
    }
}
