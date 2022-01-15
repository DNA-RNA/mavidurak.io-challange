using System;
using System.Collections.Generic;
using System.Text;
using Core.Entities;

namespace Entities.Concrete
{
   public class User  : IEntity
    {
        public int UserId { get; set; }
        public int RoleId { get; set; }
    }

}
