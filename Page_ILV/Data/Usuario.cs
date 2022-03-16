﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Page_ILV.Models.Request
{
    public class Usuario
    {
        public int IdUsuario { get; set; }
        public int? IdFoto { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Correo { get; set; }
        public string Contraseña { get; set; }
        public Foto FotoRequest { get; set; }
    }
}