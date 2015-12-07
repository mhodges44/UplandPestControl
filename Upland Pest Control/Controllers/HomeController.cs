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
                if (customerName != null && customerEmail != null && customerPhone != null && additionalNotes != null)
                {
                    if (customerName == "")
                    {
                        throw new Exception("Name field is empty!");
                    }
                    else if (customerEmail == "")
                    {
                        throw new Exception("Email field is empty!");
                    }
                    else if (customerPhone == "")
                    {
                        throw new Exception("Phone number field is empty!");
                    }
                    else if (additionalNotes == "")
                    {
                        throw new Exception("Description field is empty!");
                    }
                    else
                    {
                        MailMessage mailMessage = new MailMessage();
                        mailMessage.To.Add("uplandpest@gmail.com");
                        mailMessage.From = new MailAddress(customerEmail);
                        mailMessage.Subject = "Upland Pest Control Customer Inquiry";
                        mailMessage.Body = "Customer Name: " + customerName + "\r\nPhone Number: " + customerPhone + "\r\n" +  additionalNotes;
                        SmtpClient smtpClient = new SmtpClient("mail.uplandpestcontrol.com");
                        smtpClient.UseDefaultCredentials = false;
                        smtpClient.Credentials = new NetworkCredential("postmaster@uplandpestcontrol.com", "Myb0ynuggett!");
                        smtpClient.Send(mailMessage);
                        result = "Success";
                    }
                }
                else
                {
                    throw new Exception("One or more empty fields!");
                }
            }
            catch (Exception ex)
            {
                result = "Could not send the e-mail - error: " + ex.Message;
            }
            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}