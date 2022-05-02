using GameStoreAPI.Contexts;
using GameStoreAPI.Models;
using GameStoreAPI.Repositories;
using System.Collections.Generic;

namespace GameStoreAPI.Services
{
    public interface IDeveloperService
    {
        IEnumerable<Developer> GetAll();
        Developer GetById(int id);
        Developer Create(Developer developer);
        Developer Update(Developer developer);
        void Delete(int id);
    }

    public class DeveloperService : IDeveloperService
    {
        private readonly IDeveloperRepository _developerRepository;
        private readonly IUnitOfWork _unitOfWork;

        public DeveloperService(IDeveloperRepository developerRepository, IUnitOfWork unitOfWork)
        {
            _developerRepository = developerRepository;
            _unitOfWork = unitOfWork;
        }

        public Developer GetById(int id)
        {
            return _developerRepository.GetByIdAsync(id).Result;
        }

        public IEnumerable<Developer> GetAll()
        {
            return _developerRepository.GetAllAsync().Result;
        }

        public Developer Create(Developer developer)
        {
            _developerRepository.CreateAsync(developer);
            _unitOfWork.Commit();
            return developer;
        }
        
        public Developer Update(Developer developer)
        {
            _developerRepository.UpdateAsync(developer);
            _unitOfWork.Commit();
            return developer;
        }

        public void Delete(int id)
        {
            _developerRepository.DeleteAsync(id).Wait();
            _unitOfWork.Commit();
        }
    }
}
