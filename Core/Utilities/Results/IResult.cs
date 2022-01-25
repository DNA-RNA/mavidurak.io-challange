using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Utilities.Results
{
    //Temel void için başlangıç
    public interface IResult
    {
       /// <summary>
       ///Crud işlemleri yapıldı(ör eklendi.) 
       /// </summary>
        bool Success { get; }
       /// <summary>
       ///  if Bool is true kullanıcıya eklendi mesajı
       /// </summary>
        string Message { get; }
    }
}
