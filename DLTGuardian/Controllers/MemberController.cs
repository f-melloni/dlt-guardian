using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace DLTGuardian.Controllers
{
    public class MemberController : Controller
    {
        private readonly IHostingEnvironment _env;

        public MemberController(IHostingEnvironment env)
        {
            _env = env;
        }

        public IActionResult Index()
        {
            return View();
        }

        public override void OnActionExecuted(ActionExecutedContext context)
        {
            base.OnActionExecuted(context);
            var result = context.Result as ViewResult;
            if (result != null) {
                result.ViewData["EnvClass"] = _env.IsDevelopment() ? "dev" : "prod";
            }
        }
    }
}