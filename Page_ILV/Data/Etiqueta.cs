using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Page_ILV.Models.Request
{
    public class Etiqueta
    {
        public int IdEtiqueta { get; set; }
        public int? IdFoto { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public Foto FotoRequest { get; set; }
    }
}
