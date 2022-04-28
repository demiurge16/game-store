using System;

namespace GameStoreAPI.Contexts
{
    public interface IUnitOfWork : IDisposable
    {
        void Commit();
    }
}
