using GameStoreAPI.Contexts;
using GameStoreAPI.Models;
using GameStoreAPI.Repositories;
using System.Collections.Generic;

namespace GameStoreAPI.Services
{
    public interface IPlatformService
    {
        IEnumerable<Platform> GetAll();
        Platform GetById(int id);
        Platform Create(Platform platform);
        Platform Update(Platform platform);
        void Delete(int id);
    }
    
    public class PlatformService : IPlatformService
    {
        private readonly IPlatformRepository _platformRepository;
        private readonly IUnitOfWork _unitOfWork;

        public PlatformService(IPlatformRepository platformRepository, IUnitOfWork unitOfWork)
        {
            _platformRepository = platformRepository;
            _unitOfWork = unitOfWork;
        }

        public Platform GetById(int id)
        {
            return _platformRepository.GetByIdAsync(id).Result;
        }

        public IEnumerable<Platform> GetAll()
        {
            return _platformRepository.GetAllAsync().Result;
        }

        public Platform Create(Platform platform)
        {
            _platformRepository.CreateAsync(platform);
            _unitOfWork.Commit();
            return platform;
        }

        public Platform Update(Platform platform)
        {
            _platformRepository.UpdateAsync(platform);
            _unitOfWork.Commit();
            return platform;
        }

        public void Delete(int id)
        {
            _platformRepository.DeleteAsync(id).Wait();
            _unitOfWork.Commit();
        }
    }
}
