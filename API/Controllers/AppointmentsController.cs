using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RoleBasedAuthorization.Data;
using RoleBasedAuthorization.Models;
using RoleBasedAuthorization.Repository.Interfaces;

namespace RoleBasedAuthorization.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentsController : ControllerBase
    {
        private readonly IAppointmentService _context;

        public AppointmentsController(IAppointmentService context)
        {
            _context = context;
        }

        // GET: api/Appointments
        [HttpGet]
        public async Task<List<Appointment>> GetAppointments()
        {
            return await _context.GetAppointments();
        }

        // GET: api/Appointments/5
        [HttpGet("{id}")]
        public async Task<List<Appointment>> GetAppointmentDetail(string Id)
        {
            

            return await _context.GetAppointmentDetail(Id);
        }

        // PUT: api/Appointments/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<Appointment> PutAppointment(int id, Appointment appointment)
        {

            return await _context.PutAppointment(id,appointment);
        }

      
        [HttpPost]
        public async Task<Appointment> PostAppointment(Appointment appointment)
        {
           

            return await _context.PostAppointment(appointment);
        }

        // DELETE: api/Appointments/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteAppointment(int id)
        //{
        //    if (_context.Appointments == null)
        //    {
        //        return NotFound();
        //    }
        //    var appointment = await _context.Appointments.FindAsync(id);
        //    if (appointment == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Appointments.Remove(appointment);
        //    await _context.SaveChangesAsync();

        //    return NoContent();
        //}

        //private bool AppointmentExists(int id)
        //{
        //    return (_context.Appointments?.Any(e => e.AppointmentId == id)).GetValueOrDefault();
        //}
    }
}
