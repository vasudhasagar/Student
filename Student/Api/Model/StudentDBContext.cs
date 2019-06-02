using Microsoft.EntityFrameworkCore;

namespace Api.Model
{
    public partial class StudentDBContext : DbContext
    {
        public StudentDBContext() { }

        public StudentDBContext(DbContextOptions<StudentDBContext> options)
            : base(options) { }

        public virtual DbSet<Student> Student { get; set; }
    }
}
