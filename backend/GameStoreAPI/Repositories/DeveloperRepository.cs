using GameStoreAPI.Contexts;
using GameStoreAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GameStoreAPI.Repositories
{
    public interface IDeveloperRepository
    {
        Task<IEnumerable<Developer>> GetAllAsync();
        Task<Developer> GetByIdAsync(int id);
        Task<Developer> CreateAsync(Developer developer);
        Task<Developer> UpdateAsync(Developer developer);
        Task<Developer> DeleteAsync(int id);
    }
    public class DeveloperRepository : IDeveloperRepository
    {
        private readonly GameStoreContext _context;

        public DeveloperRepository(GameStoreContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Developer>> GetAllAsync()
        {
            return await _context.Developers.ToListAsync();
        }

        public async Task<Developer> GetByIdAsync(int id)
        {
            return await _context.Developers.FindAsync(id);
        }

        public async Task<Developer> CreateAsync(Developer developer)
        {
            _context.Developers.Add(developer);
            await _context.SaveChangesAsync();
            return developer;
        }

        public async Task<Developer> UpdateAsync(Developer developer)
        {
            _context.Developers.Update(developer);
            await _context.SaveChangesAsync();
            return developer;
        }

        public async Task<Developer> DeleteAsync(int id)
        {
            var developer = await _context.Developers.FindAsync(id);
            if (developer == null)
            {
                return null;
            }

            _context.Developers.Remove(developer);
            await _context.SaveChangesAsync();
            return developer;
        }
    }
}
