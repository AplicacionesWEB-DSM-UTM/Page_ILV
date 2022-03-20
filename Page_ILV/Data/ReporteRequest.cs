using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Page_ILV.Data
{
    public class ReporteRequest
    {
        public int IdReporte { get; set; }
        public int IdUsuario { get; set; }
        public int IdEtiqueta { get; set; }
        public int IdFoto { get; set; }
        public int IdGeoubicacion { get; set; }
        public DateTime? Fecha { get; set; }
        [Required(ErrorMessage = "Este campo es requerido")]
        public string Descripcion { get; set; }
        [Required(ErrorMessage = "Este campo es requerido")]
        public string NombreFoto { get; set; }
        public double Latitud { get; set; }
        public double Longitud { get; set; }
        public UsuarioRequest UsuarioRequest { get; set; }
        public EtiquetaRequest EtiquetaRequest { get; set; }
        public FotoRequest FotoRequest { get; set; }
        public GeoubicacionRequest GeoubicacionRequest { get; set; }
    }
}
