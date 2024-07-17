using ProductWeb.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ProductWeb.Repositories.Interfaces
{
    public interface IProductRepository
    {
        Task<Product> CreateAsync(Product newProduct);
        Task<Product> UpdateAsync(Product updatedProduct);
        Task<bool> DeleteAsync(int id);
        Task<Product> GetByIdAsync(int id);
        Task<List<Product>> GetAllAsync();
        Task<List<Product>> GetByKeywordAsync(string keyword);
    }
}
