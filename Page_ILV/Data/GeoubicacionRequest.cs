using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Page_ILV.Data
{
    public class GeoubicacionRequest
    {
        public int IdGeoubicacion { get; set; }
        [Required(ErrorMessage = "Este campo es requerido")]
        public double Latitud { get; set; }
        [Required(ErrorMessage = "Este campo es requerido")]
        public double Longitud { get; set; }
    }
}
