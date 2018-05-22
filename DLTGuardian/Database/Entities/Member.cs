using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DLTGuardian.Database.Entities
{
    public class Member
    {
        [Key]
        [Required]
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string AccountAddress { get; set; } 

        [StringLength(400)]
        public string OrganizationName { get; set; }

        [StringLength(400)]
        public string OrganizationWebsite { get; set; }

        public string OrganizationDescription { get; set; }

        public bool IsActive { get; set; }
    }
}
