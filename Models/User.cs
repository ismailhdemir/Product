namespace ProductWeb.Models
{

    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty; // Varsayılan değer verildi
      
        public string Password { get; set; } = string.Empty; // Varsayılan değer verildi
        public DateTime CreatedAt { get; set; } = DateTime.Now; // Varsayılan değer verildi
    }
}