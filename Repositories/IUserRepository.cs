using ProductWeb.Models;
using System.Threading.Tasks;

namespace ProductWeb.Repositories.Interfaces
{
    public interface IUserRepository
    {
        Task<User> GetUserByUsernameAsync(string username);
        Task<User> CreateAsync(User newUser);
    }
}
