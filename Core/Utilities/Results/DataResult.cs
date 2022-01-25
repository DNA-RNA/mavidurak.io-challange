using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Utilities.Results
{
    //Result void türü için dataresult data döndürenler için
    public class DataResult<T> : Result, IDataResult<T>
    {
       //Geri dönüş mesajı içeren ctor
        public DataResult(T data,bool success,string message): base(success,message)
        {
            Data = data;  
        }
       //Geri dönüş mesajı döndürmek istemeyebilirdi bu yüzden 2.ctor ekledik
        public DataResult(T data,bool success):base(success)
        {
            Data = data;
        }
        public T Data { get; }
    }
}
