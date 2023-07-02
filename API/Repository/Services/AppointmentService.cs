using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RoleBasedAuthorization.Data;
using RoleBasedAuthorization.Models;
using RoleBasedAuthorization.Repository.Interfaces;

namespace RoleBasedAuthorization.Repository.Services
{
    public class AppointmentService:IAppointmentService
    {

        private readonly RoleBasedAuthorizationDbContext _context;

        public AppointmentService(RoleBasedAuthorizationDbContext context)
        {
            _context = context;
        }

        public async Task<List<Appointment>> GetAppointments()
        {
            return await _context.Appointments.ToListAsync();
        }

        public async Task<Appointment> PutAppointment(int id, Appointment appointment)
        {
            var appoin = _context.Appointments.FirstOrDefault(x=>x.AppointmentId == id);
            if (appoin != null)
            {
                appoin.feedback=appointment.feedback;
                appoin.TimeSlot=appointment.TimeSlot;
                appoin.Date=appointment.Date;
                 
                _context.Appointments.Add(appoin);
                _context.SaveChanges();
            }
            return appoin;
        }

        public async Task<Appointment> PostAppointment(Appointment appointment)
        {
            _context.Appointments.Add(appointment);
            await _context.SaveChangesAsync();
            return appointment;
        }

        public async Task<List<Appointment>> GetAppointmentDetail(string Id)
        {
            var patient = _context.Appointments.Where(d => d.PatientId == Id).ToListAsync();
            var doctor = _context.Appointments.Where(d => d.doctorId == Id).ToListAsync();

            if (patient != null)
            {
                return await patient;
            }
            else if(doctor != null)
            {
                return  await doctor;
            }


            return null;
        }

    }
}
