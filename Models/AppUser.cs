using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace AuthECAPI2.Models
{
    public class AppUser:IdentityUser
    {
        [PersonalData]
        [Column(TypeName ="nvarchar(150)")]
        public string FullName { get; set; }


        [PersonalData]
        [Column(TypeName = "nvarchar(150)")]
        public string Gender { get; set; }


        [PersonalData]
        [Column(TypeName = "nvarchar(150)")]
        public string DOB { get; set; }

        [PersonalData]
        [Column(TypeName = "nvarchar(150)")]
        public string LibraryID { get; set; }
    }
}
