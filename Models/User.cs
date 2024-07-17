namespace ProductWeb.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty; // Kullanıcıdan alınacak şifre
        public string PasswordHash { get; set; } = string.Empty; // Hash'lenmiş şifre
        public DateTime CreatedAt { get; set; } = DateTime.Now; // Kullanıcı oluşturulma tarihi
    }
}
