using Microsoft.AspNetCore.Mvc.RazorPages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Page_ILV.Pages
{
    public class HostModel : PageModel
    {
        private readonly AppData appData;

        public HostModel(AppData appData)
        {
            this.appData = appData;
        }

        public void OnGet()
        {
            var token = HttpContext.Request.Cookies["token"];
            var isAdmin = HttpContext.Request.Cookies["isAdmin"];
            appData.Token = token;
            appData.IsAdmin = isAdmin;
        }
    }
}