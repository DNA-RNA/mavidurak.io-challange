using Core.DataAccess.EntityFramework;
using DataAccess.Abstract;
using Entities.Concrete;
using Entities.DTOs;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccess.Concrete.EntityFramework
{
    public class EfUsersDal : EfEntityRepositoryBase<User, MySqlContext>, IUserDal
    {
        public List<UserDetailDto> GetUserDetails()
        {
            using (MySqlContext context = new MySqlContext())
            {
                var result = from u in context.Users
                             join r in context.Roles
                             on u.RoleId equals r.RoleId
                             select new ProductDetailDto
                             {
                                 UserDetailId = u.UserDetailId,
                                 FirstName = u.FirstName,
                                 LastName = u.LastName,

                             };

                return result.ToList();
            }
        }
    }
}
