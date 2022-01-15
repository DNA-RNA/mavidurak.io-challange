using Business.Abstract;
using Entities.Concrete;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")] 
    [ApiController]
    public class StockController : ControllerBase
    {
        IStoreService _storeService;

        public StockController(IStoreService storeService)
        {
            _storeService = storeService;
        }
        [HttpGet("getall")]
        public IActionResult GetAll()
        {

            var result = _storeService.GetAll();
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }
        [HttpGet("getbyid")]
        public IActionResult GetById(int id)
        {
            var result = _storeService.GetById(id);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("add")]
        //Data ekleme
        public IActionResult Add(Store store)
        {
            var result = _storeService.Add(store);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
        [HttpPost("delete")]
        public IActionResult Delete(Store store)
        {
            var result = _storeService.Delete(store);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
        [HttpPost("update")]
        public IActionResult Update(Store store)
        {
            var result = _storeService.Update(store);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }


    }

}
