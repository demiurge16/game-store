using GameStoreAPI.Contexts;
using GameStoreAPI.Models;
using GameStoreAPI.Repositories;
using System.Collections.Generic;

namespace GameStoreAPI.Services
{
    public interface IGenreService
    {
        IEnumerable<Genre> GetAll();
        Genre GetById(int id);
        Genre Create(Genre genre);
        Genre Update(Genre genre);
        void Delete(int id);
    }

    public class GenreService : IGenreService
    {
        private readonly IGenreRepository _genreRepository;
        private readonly IUnitOfWork _unitOfWork;

        public GenreService(IGenreRepository genreRepository, IUnitOfWork unitOfWork)
        {
            _genreRepository = genreRepository;
            _unitOfWork = unitOfWork;
        }

        public Genre GetById(int id)
        {
            return _genreRepository.GetByIdAsync(id).Result;
        }

        public IEnumerable<Genre> GetAll()
        {
            return _genreRepository.GetAllAsync().Result;
        }

        public Genre Create(Genre genre)
        {
            _genreRepository.CreateAsync(genre);
            _unitOfWork.Commit();
            return genre;
        }

        public Genre Update(Genre genre)
        {
            _genreRepository.UpdateAsync(genre);
            _unitOfWork.Commit();
            return genre;
        }

        public void Delete(int id)
        {
            _genreRepository.DeleteAsync(id).Wait();
            _unitOfWork.Commit();
        }
    }
}
