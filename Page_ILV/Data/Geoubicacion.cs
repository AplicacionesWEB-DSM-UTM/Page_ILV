using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Page_ILV.Models.Request
{
    public class Geoubicacion
    {
        public int IdGeoubicacion { get; set; }
        public double? Latitud { get; set; }
        public double? Longitud { get; set; }
    }
}
