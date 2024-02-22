using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoPrueba.Models;

namespace ProyectoPrueba.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PermissionController : ControllerBase
    {

        private readonly UserDbContext _userDbContext;

        public PermissionController(UserDbContext context)
        {
            _userDbContext = context;
        }

        [HttpGet]
        [Route("GetPermissions")]
        public async Task<IActionResult> GetPermissions()
        {
            List<Permission> permissionsList = await _userDbContext.Permissions.ToListAsync();

            return StatusCode(StatusCodes.Status200OK, permissionsList);
        }


        [HttpPost]
        [Route("SavePermission")]
        public async Task<IActionResult> SavePermission([FromBody] Permission request)
        {
            await _userDbContext.Permissions.AddAsync(request);
            await _userDbContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status201Created, "Permiso guardado correctamente");
        }

        [HttpPut]
        [Route("EditPermission")]
        public async Task<IActionResult> EditPermission([FromBody] Permission request)
        {
            _userDbContext.Permissions.Update(request);
            await _userDbContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status201Created, "Permiso editado correctamente");
        }

        [HttpDelete]
        [Route("DeletePermission/{id:int}")]
        public async Task<IActionResult> DeletePermission(int id)
        {
            Permission permission = _userDbContext.Permissions.Find(id);
            _userDbContext.Remove(permission);
            await _userDbContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status201Created, "Permiso eliminado correctamente");
        }

    }
}
