using Nethereum.ABI.FunctionEncoding.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DLTGuardian.Utils
{
    public class CreateOrganizationModel
    {
        [Parameter("address", 1)]
        public string Sender { get; set; }

        [Parameter("string", 2)]
        public string Name { get; set; }

        [Parameter("string", 3)]
        public string Website { get; set; }

        [Parameter("string", 4)]
        public string Description { get; set; }
    }
}
