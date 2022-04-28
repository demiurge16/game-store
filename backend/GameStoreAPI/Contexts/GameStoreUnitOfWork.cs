namespace GameStoreAPI.Contexts
{
    public class GameStoreUnitOfWork : IUnitOfWork
    {
        private readonly GameStoreContext _context;

        public GameStoreUnitOfWork(GameStoreContext context)
        {
            _context = context;
        }

        public void Commit()
        {
            _context.SaveChanges();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
