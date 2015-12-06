using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Web;
using System.Web.Mvc;

namespace Upland_Pest_Control.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult EmailCustomerInfo(string customerName, string customerEmail, string customerPhone, string additionalNotes) {
            string result = "";
            try
            {
                MailMessage mailMessage = new MailMessage();
                mailMessage.To.Add("mike_hodges44@yahoo.com");
                mailMessage.From = new MailAddress(customerEmail);
                mailMessage.Subject = "Upland Pest Control Customer Inquiry";
                mailMessage.Body = additionalNotes;
                SmtpClient smtpClient = new SmtpClient("mail.uplandpestcontrol.com");
                smtpClient.UseDefaultCredentials = false;
                //SmtpClient smtpClient = new SmtpClient("m07.internetmailserver.net");
                smtpClient.Credentials = new NetworkCredential("postmaster@uplandpestcontrol.com", "Myb0ynuggett!");
                smtpClient.Send(mailMessage);
                result = "Success";
            }
            catch (Exception ex)
            {
                result = "Could not send the e-mail - error: " + ex.Message;
            }
            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}