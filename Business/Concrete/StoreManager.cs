using Business.Abstract;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Concrete
{
   public class StoreManager : IStoreService
   {
        IStoreDal _storeDal;

        public StoreManager(IStoreDal storeDal)
        {
            _storeDal = storeDal;
        }

        public IResult Add(Store store)
        {
            _storeDal.Add(store);
            return new SuccessResult();
        }

        public IResult Delete(Store store)
        {
            _storeDal.Delete(store);
            return new SuccessResult();
        }

        public IDataResult<List<Store>> GetAll()
        {
            return new SuccessDataResult<List<Store>>(_storeDal.GetAll());
        }

        public IDataResult<Store> GetById(int storeId)
        {
            return new SuccessDataResult<Store>(_storeDal.Get(s => s.StoreId == storeId));
        }

        public IResult Update(Store store)
        {
            _storeDal.Delete(store);
            return new SuccessResult();
        }
    }
}
