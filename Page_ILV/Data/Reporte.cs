using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Page_ILV.Models.Request
{
    public class Reporte
    {
        public int IdReporte { get; set; }
        public int? IdUsuario { get; set; }
        public int? IdEtiqueta { get; set; }
        public int? IdFoto { get; set; }
        public int? IdGeoubicacion { get; set; }
        public DateTime? Fecha { get; set; }
        public string Descripcion { get; set; }
        public Usuario UsuarioRequest { get; set; }
        public Etiqueta EtiquetaRequest { get; set; }
        public Foto FotoRequest { get; set; }
        public Geoubicacion GeoubicacionRequest { get; set; }
    }
}
