using System;
using System.Collections.Generic;

namespace ProyectoPrueba.Models;

public partial class PermissionType
{
    public int Id { get; set; }

    public string? Descripcion { get; set; }

    //public virtual ICollection<Permission> Permissions { get; } = new List<Permission>();
}
