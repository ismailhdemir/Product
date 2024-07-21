using ProductWeb.Repositories.Interfaces;
using ProductWeb.Services.Interfaces;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using ProductWeb.Models;

namespace ProductWeb.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<User> ValidateUser(string username, string password)
        {
            var user = await _userRepository.GetUserByUsernameAsync(username);
            if (user != null && VerifyPasswordHash(password, user.Password))
            {
                return user;
            }
            return null;
        }

        public async Task<User> CreateUser(User newUser)
        {
            newUser.Password = HashPassword(newUser.Password);
            return await _userRepository.CreateAsync(newUser);
        }

        private bool VerifyPasswordHash(string password, string storedPassword)
        {
            var computedHash = HashPassword(password);
            return computedHash == storedPassword;
        }

        private string HashPassword(string password)
        {
            using (var hmac = new HMACSHA256())
            {
                var hash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
                return Convert.ToBase64String(hash);
            }
        }
    }
}
