using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using DLTGuardian.Database;
using DLTGuardian.Utils;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace DLTGuardian
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<DBEntities>(options => options.UseMySql(Configuration.GetConnectionString("DefaultConnection"), b => b.MigrationsAssembly("DLTGuardian")));
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, IConfiguration configuration)
        {
            if (env.IsDevelopment())
            {
                app.UseBrowserLink();
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });

            // Check if Starup is invoked by entityFramework and if so we can't continue because of infinite loop in Observer
            StackTrace stackTrace = new StackTrace();
            List<string> efMethods = new List<string>() { "RemoveMigration", "AddMigration", "UpdateDatabase" };
            if (stackTrace.GetFrames().Any(f => efMethods.Contains(f.GetMethod().Name))) {
                return;
            }

            SmartContractEventListener.Setup(configuration);
        }
    }
}
