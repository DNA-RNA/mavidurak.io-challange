using Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.Concrete
{
    public class Store : IEntity
    {
        public int StoreId { get; set; }
        public int  ProductId { get; set; }
        public int StoreCategoryId { get; set; }
       
    }
}
