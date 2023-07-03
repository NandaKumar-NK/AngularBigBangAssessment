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
            var appoin = await _context.Appointments.FirstOrDefaultAsync(x=>x.AppointmentId == id);
            if (appoin != null)
            {
               
                //appoin.Details = appointment.Details;
                appoin.feedback=appointment.feedback;
                //appoin.TimeSlot=appointment.TimeSlot;
                //appoin.Date=appointment.Date;
                //appoin.medicalInfo=appointment.medicalInfo;
                 
               
                 await _context.SaveChangesAsync();
            }
            return appoin;
        }

        public async Task<Appointment> PutAppointmentPrescription(int appointmentId, Appointment appointment)
        {
            var appoin = await _context.Appointments.FirstOrDefaultAsync(x => x.AppointmentId == appointmentId);
            if (appoin != null)
            {
                appoin.medicalInfo=appointment.medicalInfo;
                await _context.SaveChangesAsync();
            }
            return appoin;
        }


            public async Task<Appointment> PostAppointment(Appointment appointment)
        {
            _context.Appointments.Add(appointment);
            await _context.SaveChangesAsync();
            return appointment;
        }

        public async Task<List<Appointment>?> GetAppointmentDetail(string id)
        {
            var appointments = await _context.Appointments
            .Where(a => a.PatientId == id || a.doctorId == id)
            .ToListAsync();

            if (appointments == null || appointments.Count == 0)
            {
                return null;
            }

            return appointments;
        }

    }
}
