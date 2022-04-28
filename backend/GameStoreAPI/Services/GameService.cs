using GameStoreAPI.Contexts;
using GameStoreAPI.Models;
using GameStoreAPI.Repositories;

using System.Collections.Generic;

namespace GameStoreAPI.Services
{
    public class GameService
    {
        private readonly IGameRepository _gameRepository;
        private readonly IUnitOfWork _unitOfWork;

        public GameService(IGameRepository gameRepository, IUnitOfWork unitOfWork)
        {
            _gameRepository = gameRepository;
            _unitOfWork = unitOfWork;
        }

        public Game GetGame(int id)
        {
            return _gameRepository.GetByIdAsync(id).Result;
        }

        public IEnumerable<Game> GetGames()
        {
            return _gameRepository.GetAllAsync().Result;
        }

        public void CreateGame(Game game)
        {
            _gameRepository.CreateAsync(game).Wait();
            _unitOfWork.Commit();
        }

        public void UpdateGame(Game game)
        {
            _gameRepository.UpdateAsync(game).Wait();
            _unitOfWork.Commit();
        }

        public void DeleteGame(int id)
        {
            _gameRepository.DeleteAsync(id).Wait();
            _unitOfWork.Commit();
        }
    }
}
