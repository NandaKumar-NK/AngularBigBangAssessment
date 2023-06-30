using Microsoft.EntityFrameworkCore;
using RoleBasedAuthorization.Data;
using RoleBasedAuthorization.Models;
using RoleBasedAuthorization.Repository.Interfaces;

namespace RoleBasedAuthorization.Repository.Services
{
    public class DoctorService:IDoctor
    {

        private readonly RoleBasedAuthorizationDbContext _context;
        public DoctorService(RoleBasedAuthorizationDbContext context)
        {
            _context = context; 
        }

        public async Task<List<Doctor>> GetRequest()
        {
          return await  _context.Doctor.ToListAsync();
        }

        public async Task<Doctor> PostDoctor(Doctor doctor)
        {
           _context.Doctor.Add(doctor);
           await  _context.SaveChangesAsync();
            return   doctor;

        }
    }
}
