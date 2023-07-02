
using Microsoft.EntityFrameworkCore;
using RoleBasedAuthorization.Models;

namespace RoleBasedAuthorization.Data
{
    public class RoleBasedAuthorizationDbContext : DbContext
    {
        public RoleBasedAuthorizationDbContext(DbContextOptions<RoleBasedAuthorizationDbContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }
        public DbSet<Doctor> Doctor { get; set; }

        public DbSet<Appointment> Appointments { get; set; }
    }
}
