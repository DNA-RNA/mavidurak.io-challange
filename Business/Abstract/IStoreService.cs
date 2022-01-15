using Core.Utilities.Results;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface IStoreService
    {
        IDataResult<List<Store>> GetAll();
        IDataResult<Store> GetById(int storeId);
        IResult Add(Store store);
        IResult Delete(Store store);
        IResult Update(Store store);
    }
}
