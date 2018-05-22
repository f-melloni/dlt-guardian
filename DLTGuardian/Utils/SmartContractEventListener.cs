using Microsoft.Extensions.Configuration;
using Nethereum.RPC.Eth.DTOs;
using Nethereum.Web3;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace DLTGuardian.Utils
{
    public class SmartContractEventListener
    {
        private static string nodeIPAddress = "";
        private static int nodePort = 0;
        private static string nodeUser = "";
        private static string nodePassword = "";

        private static string contractAddress = "";
        private static string contractABI = "";

        public static void Setup(IConfiguration configuration)
        {
            string contractABIFileName = configuration["SmartContract:ABIFileName"];

            nodeIPAddress = configuration["EthNode:IP"];
            nodePort = Convert.ToInt16(configuration["EthNode:Port"]);
            nodeUser = configuration["EthNode:RpcUser"];
            nodePassword = configuration["EthNode:RpcPassword"];

            contractAddress = configuration["SmartContract:Address"];
            contractABI = System.IO.File.ReadAllText(AppDomain.CurrentDomain.BaseDirectory + contractABIFileName);

            //Begin();
        }

        private static void Begin()
        {
            Thread listenerThread = new Thread(Watch);
            listenerThread.Name = "ListenerThread";
            listenerThread.Start();
        }

        private static async void Watch()
        {
            var url = string.Format("http://{0}:{1}", nodeIPAddress, nodePort);

            var byteArray = Encoding.ASCII.GetBytes($"{nodeUser}:{nodePassword}");
            var authorization = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(byteArray));

            var client = new Nethereum.JsonRpc.Client.RpcClient(new Uri(url), authorization);
            var web3 = new Web3(client);

            var contract = web3.Eth.GetContract(contractABI, contractAddress);
            var createOrganisationEvent = contract.GetEvent("CreateOrganisation");

            var createOrganisationFilter = createOrganisationEvent.CreateFilterInput();
           

            while (true) {
                var log = await createOrganisationEvent.GetAllChanges<CreateOrganizationModel>(createOrganisationFilter);

                
                Thread.Sleep(10000);
            }
        }
    }
}
