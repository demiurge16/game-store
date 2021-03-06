using GameStoreAPI.Contexts;
using GameStoreAPI.Models;
using GameStoreAPI.Queries;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GameStoreAPI.Repositories
{
    public interface IGameRepository
    {
        Task<IEnumerable<Game>> GetAllAsync(GameListQuery query);
        Task<Game> GetByIdAsync(int id);
        Task<Game> CreateAsync(Game game);
        Task<Game> UpdateAsync(Game game);
        Task<Game> DeleteAsync(int id);
    }

    public class GameRepository : IGameRepository
    {
        private readonly GameStoreContext _context;

        public GameRepository(GameStoreContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Game>> GetAllAsync(GameListQuery query)
        {
            return await _context.Games
                .Include(e => e.Publisher)
                .Include(e => e.Developer)
                .Include(e => e.Platforms)
                .Include(e => e.Genres)
                .Include(e => e.Reviews)
                .UseQuery(query).ToListAsync();
        }

        public async Task<Game> GetByIdAsync(int id)
        {
            return await _context.Games.FindAsync(id);
        }

        public async Task<Game> CreateAsync(Game game)
        {
            await _context.Games.AddAsync(game);
            await _context.SaveChangesAsync();
            return game;
        }

        public async Task<Game> UpdateAsync(Game game)
        {
            _context.Entry(game).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return game;
        }

        public async Task<Game> DeleteAsync(int id)
        {
            var game = await _context.Games.FindAsync(id);
            if (game == null)
            {
                return null;
            }

            _context.Games.Remove(game);
            await _context.SaveChangesAsync();
            return game;
        }
    }
}
