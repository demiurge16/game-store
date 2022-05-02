using GameStoreAPI.Contexts;
using GameStoreAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GameStoreAPI.Repositories
{
    public interface IPlatformRepository
    {
        Task<IEnumerable<Platform>> GetAllAsync();
        Task<Platform> GetByIdAsync(int id);
        Task<Platform> CreateAsync(Platform platform);
        Task<Platform> UpdateAsync(Platform platform);
        Task<Platform> DeleteAsync(int id);
    }
    public class PlatformRepository : IPlatformRepository
    {
        private readonly GameStoreContext _context;

        public PlatformRepository(GameStoreContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Platform>> GetAllAsync()
        {
            return await _context.Platforms.ToListAsync();
        }

        public async Task<Platform> GetByIdAsync(int id)
        {
            return await _context.Platforms.FindAsync(id);
        }

        public async Task<Platform> CreateAsync(Platform platform)
        {
            await _context.Platforms.AddAsync(platform);
            await _context.SaveChangesAsync();
            return platform;
        }

        public async Task<Platform> UpdateAsync(Platform platform)
        {
            _context.Platforms.Update(platform);
            await _context.SaveChangesAsync();
            return platform;
        }

        public async Task<Platform> DeleteAsync(int id)
        {
            var platform = await _context.Platforms.FindAsync(id);
            if (platform == null)
            {
                return null;
            }

            _context.Platforms.Remove(platform);
            await _context.SaveChangesAsync();
            return platform;
        }
    }
}
