using Core.Utilities.Results;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface IRoleService
    {
        IDataResult<List<Role>> GetAll();
        IDataResult<Role> GetById(int roleId);
        IResult Add(Role role);
        IResult Delete(Role role);
        IResult Update(Role role);
    }
}
