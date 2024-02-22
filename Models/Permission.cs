using System;
using System.Collections.Generic;

namespace ProyectoPrueba.Models;

public partial class Permission
{
    public int Id { get; set; }

    /// <summary>
    /// Forename
    /// </summary>
    public string NombreEmpleado { get; set; } = null!;

    public string ApellidoEmpleado { get; set; } = null!;

    public int TipoPermiso { get; set; }

    public DateTime FechaPermiso { get; set; }

    //public virtual PermissionType TipoPermisoNavigation { get; set; } = null!;
}
