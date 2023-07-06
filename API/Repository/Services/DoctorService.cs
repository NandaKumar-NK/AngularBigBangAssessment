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
          return await _context.Doctor.Where(d => d.requestStatus == "request").ToListAsync();
        }

        public async Task<List<Doctor>> DoctorDetails()
        {
            return await _context.Doctor.Where(d => d.requestStatus == "Accepted").ToListAsync();

        }
        public async Task<Doctor> logedinDoctor(string id)
        {
           var doc= _context.Doctor.Where(d => d.requestStatus == "Accepted").FirstOrDefaultAsync(x => x.Id == id);
            return await doc;
        }


        public async Task<Doctor> PostDoctor(Doctor doctor)
        {
           _context.Doctor.Add(doctor);
           await  _context.SaveChangesAsync();
            return   doctor;

        }

        public async Task<Doctor> UpdateDoctor(string id,Doctor doctor)
        {
            var doc = await  _context.Doctor.FirstOrDefaultAsync(x=>x.Id==id);
            if (doc != null)
            {
                doc.Experiance = doctor.Experiance;
               
                doc.requestStatus = doctor.requestStatus;
                doc.Specialization = doctor.Specialization;
                doc.location = doctor.location;
                doc.phone = doctor.phone;

                await _context.SaveChangesAsync();
                return doc;
            }

         
            return  null;
            
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
