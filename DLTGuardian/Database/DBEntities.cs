using DLTGuardian.Database.Entities;
using Microsoft.EntityFrameworkCore;

namespace DLTGuardian.Database
{
    public class DBEntities : DbContext
    {
        public virtual DbSet<Member> Members { get; set; }

        public DBEntities(DbContextOptions<DBEntities> options) : base(options)
        {

        }

        public DBEntities()
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
