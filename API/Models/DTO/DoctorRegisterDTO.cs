﻿namespace RoleBasedAuthorization.Models.DTO
{
    public class DoctorRegisterDTO:Doctor
    {
        public string? PasswordClear { get; set; }
    }
}
