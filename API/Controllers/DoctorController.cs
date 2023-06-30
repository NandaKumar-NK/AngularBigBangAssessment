using JWTAuthenticationApp.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RoleBasedAuthorization.Models;
using RoleBasedAuthorization.Repository.Interfaces;

namespace RoleBasedAuthorization.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        private readonly IDoctor _context;
        public DoctorController(IDoctor context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<List<Doctor>> GetRequest()
        {
            return await _context.GetRequest();
        }

        [HttpPost]
        public async Task<Doctor> PostDoctor(Doctor doctor)
        {
            return await _context.PostDoctor(doctor);
        }

        [HttpPut]
        public async Task<Doctor> UpdateDoctor(string id, Doctor doctor)
        {
            return await _context.UpdateDoctor(id,doctor);
        }

        [HttpDelete]
        public async Task<string> deleteRequest(string id)
        {
            return await _context.deleteRequest(id);
        }
    }
}
