using GameStoreAPI.Contexts;
using GameStoreAPI.Models;
using GameStoreAPI.Queries;
using GameStoreAPI.Repositories;

using System.Collections.Generic;

namespace GameStoreAPI.Services
{
    public interface IGameService
    {
        IEnumerable<Game> GetGames(GameListQuery gameListQuery);
        Game GetById(int id);
        Game Create(Game game);
        Game Update(Game game);
        void Delete(int id);
    }

    public class GameService : IGameService
    {
        private readonly IGameRepository _gameRepository;
        private readonly IUnitOfWork _unitOfWork;

        public GameService(IGameRepository gameRepository, IUnitOfWork unitOfWork)
        {
            _gameRepository = gameRepository;
            _unitOfWork = unitOfWork;
        }

        public Game GetById(int id)
        {
            return _gameRepository.GetByIdAsync(id).Result;
        }
        
        public IEnumerable<Game> GetGames(GameListQuery query)
        {
            return _gameRepository.GetAllAsync(query).Result;
        }

        public Game Create(Game game)
        {
            _gameRepository.CreateAsync(game);
            _unitOfWork.Commit();
            return game;
        }

        public Game Update(Game game)
        {
            _gameRepository.UpdateAsync(game);
            _unitOfWork.Commit();
            return game;
        }

        public void Delete(int id)
        {
            _gameRepository.DeleteAsync(id).Wait();
            _unitOfWork.Commit();
        }
    }
}
