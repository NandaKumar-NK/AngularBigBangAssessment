using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Numerics;

namespace RoleBasedAuthorization.Models
{
    public class Doctor
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public string? Id { get; set; }
        public string? Email { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;    
        public string Gender { get; set; } = string.Empty;
        public string Role { get; set; } = string.Empty;
        public string Specialization { get; set; } = string.Empty;
        public int Experiance { get; set; }
        public string requestStatus { get; set; } = string.Empty;
        public string availability { get; set; } = string.Empty;
        public string password { get; set; } = string.Empty;

        public string location { get; set; } = string.Empty;
        public string phone {  get; set; } =string.Empty;

       


    }
}
