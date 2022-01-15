using Core.Entities;

namespace Entities.Concrete
{
    public class Role : IEntity
   {
        public string RoleId { get; set; }
        public string RoleName { get; set; }
       
    }
}
