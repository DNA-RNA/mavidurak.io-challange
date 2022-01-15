
using Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.Concrete
{
  //Public yapmamızın nedeni diğerlerinin de ulaşmasını istememiz //deafultu internaldır
   public class Product : IEntity
   {
        public int ProductId { get; set; }
        public int RoleId { get; set; }
        public int CategoryId { get; set; }
        public string ProductName { get; set; }
        public string ProductCode { get; set; }
        public short Stock { get; set; }
        public decimal UnitPrice { get; set; }
        public decimal PurchasePrice { get; set; }
        public DateTime PurchaseDate { get; set; }
        public decimal SalePrice { get; set; }
    }
}
