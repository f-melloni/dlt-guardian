using Nethereum.ABI.FunctionEncoding.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DLTGuardian.Models
{
    public class CreateOrganizationModel
    {
        public string AccountAddress { get; set; }
        public string OrganizationName { get; set; }
        public string OrganizationWebsite { get; set; }
        public string OrganizationDescription { get; set; }
    }

    public class DeactivateOrganisationModel
    {
        public string AccountAddress { get; set; }
    }

    public class ReactivateOrganisationModel
    {
        public string AccountAddress { get; set; }
    }

    public class ChangeURLModel
    {
        public string AccountAddress { get; set; }
        public string OrganizationWebsite { get; set; }
    }

    public class ChangeDescriptionModel
    {
        public string AccountAddress { get; set; }
        public string OrganizationDescription { get; set; }
    }
}
