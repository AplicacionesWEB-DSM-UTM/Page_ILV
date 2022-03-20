using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Page_ILV.Data
{
    public class EtiquetaRequest
    {
        public int IdEtiqueta { get; set; }
        public int IdFoto { get; set; }
        [Required(ErrorMessage = "Este campo es requerido")]
        public string Nombre { get; set; }
        [Required(ErrorMessage = "Este campo es requerido")]
        public string Descripcion { get; set; }
        public FotoRequest FotoRequest { get; set; }
    }
}
