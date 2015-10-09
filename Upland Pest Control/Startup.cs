using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Upland_Pest_Control.Startup))]
namespace Upland_Pest_Control
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
