using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Page_ILV.Data
{
    public class GeoubicacionRequest
    {
        public int IdGeoubicacion { get; set; }
        public double? Latitud { get; set; }
        public double? Longitud { get; set; }
    }
}
