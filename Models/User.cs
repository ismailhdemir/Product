namespace ProductWeb.Models
{
    public class User
    {
        public int id { get; set; } 
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty; 
        public string PasswordHash { get; set; } = string.Empty;
        public DateTime createdAt { get; set; } = DateTime.Now;
    }
}
