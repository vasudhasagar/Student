using Api.Model;
using Microsoft.EntityFrameworkCore;
using System;

namespace Api
{
    public class ConnectionFactory : IDisposable
    {
        #region IDisposable Support
        private bool disposedValue = false; 

        public StudentDBContext CreateContext() 
        {
            DbContextOptions<StudentDBContext> option = new DbContextOptionsBuilder<StudentDBContext>().UseInMemoryDatabase(databaseName: "Student_Database").Options;

            StudentDBContext context = new StudentDBContext(option);
            if (context != null)
            {
               // context.Database.EnsureDeleted();
                context.Database.EnsureCreated();
            }

            return context;
        }
        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                }
                disposedValue = true;
            }
        }

        public void Dispose()
        {
            Dispose(true);
        }
        #endregion
    }
}
