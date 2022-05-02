using GameStoreAPI.Contexts;
using GameStoreAPI.Models;
using GameStoreAPI.Repositories;
using System.Collections.Generic;

namespace GameStoreAPI.Services
{
    public interface IPublisherService
    {
        IEnumerable<Publisher> GetAll();
        Publisher GetById(int id);
        Publisher Create(Publisher publisher);
        Publisher Update(Publisher publisher);
        void Delete(int id);
    }

    public class PublisherService : IPublisherService
    {
        private readonly IPublisherRepository _publisherRepository;
        private readonly IUnitOfWork _unitOfWork;

        public PublisherService(IPublisherRepository publisherRepository, IUnitOfWork unitOfWork)
        {
            _publisherRepository = publisherRepository;
            _unitOfWork = unitOfWork;
        }

        public Publisher GetById(int id)
        {
            return _publisherRepository.GetByIdAsync(id).Result;
        }

        public IEnumerable<Publisher> GetAll()
        {
            return _publisherRepository.GetAllAsync().Result;
        }

        public Publisher Create(Publisher publisher)
        {
            _publisherRepository.CreateAsync(publisher);
            _unitOfWork.Commit();
            return publisher;
        }

        public Publisher Update(Publisher publisher)
        {
            _publisherRepository.UpdateAsync(publisher);
            _unitOfWork.Commit();
            return publisher;
        }

        public void Delete(int id)
        {
            _publisherRepository.DeleteAsync(id).Wait();
            _unitOfWork.Commit();
        }
    }
}
