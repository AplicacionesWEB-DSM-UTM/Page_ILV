using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Page_ILV.Data
{
    public class UsuarioRequest
    {
        public int IdUsuario { get; set; }
        public int IdFoto { get; set; }
        [Required(ErrorMessage = "Este campo es requerido")]
        public string NombreFoto { get; set; }
        [Required(ErrorMessage = "Este campo es requerido")]
        public string Nombre { get; set; }
        [Required(ErrorMessage = "Este campo es requerido")]
        public string Apellido { get; set; }
        [Required(ErrorMessage = "Este campo es requerido")]
        [EmailAddress]
        public string Correo { get; set; }
        [Required(ErrorMessage = "Este campo es requerido")]
        public string Password { get; set; }
        public int IsAdmin { get; set; }
        public string Token { get; set; }
        public FotoRequest FotoRequest { get; set; }
    }
}
