using Entities.Concrete;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccess.Concrete.EntityFramework
{
    public class MySqlContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"server=127.0.0.1(mysqldb);Database=MySqlConnection;uid=rana;password=Sugar@ndBrownies1.;Trusted_Connection=true");
        }
        //Hangi veri tabanına bağlanacağını belirttik

        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Role> Roles { get; set; }
        //Hangi class hangi tabloya karşılık geliyor
        public DbSet<Store> Stores { get; set; }
        public DbSet<User> Users { get; set; }

    }
}
