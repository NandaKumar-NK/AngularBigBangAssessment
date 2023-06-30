using RoleBasedAuthorization.Models;

namespace RoleBasedAuthorization.Repository.Interfaces
{
    public interface IDoctor
    {

        public Task<List<Doctor>> GetRequest();
        public Task<Doctor> PostDoctor(Doctor doctor);
    }
}
