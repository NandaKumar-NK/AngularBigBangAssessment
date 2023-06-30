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

        public async Task<Doctor> UpdateDoctor(string id,Doctor doctor)
        {
            var doc = await  _context.Doctor.FindAsync(id);
            doc.requestStatus=doctor.requestStatus;
            doc.Experiance = doctor.Experiance;
            doc.Email = doctor.Email;
            doc.Specialization = doctor.Specialization;
            _context.SaveChangesAsync();
            return  doc;
            
        }
        public async Task<string> deleteRequest(string id)
        {
            var doc = await _context.Doctor.FindAsync(id);
            _context.Doctor.Remove(doc);
            await _context.SaveChangesAsync();
            return "Deleted Successfully";
        }

    }
}
