using GameStoreAPI.Dto;
using GameStoreAPI.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace GameStoreAPI.Controllers
{
    [Route("api/v1/developers")]
    [ApiController]
    public class DeveloperControllers : Controller
    {
        private readonly IDeveloperService _developerService;

        public DeveloperControllers(IDeveloperService developerService)
        {
            _developerService = developerService;
        }

        [HttpGet]
        public IList<DeveloperViewDto> Get()
        {
            IList<DeveloperViewDto> result = _developerService.GetAll()
                .Select(d => d.ToView())
                .ToList();

            return result;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok();
        }

        [HttpPost]
        public IActionResult Post([FromBody] CreateDeveloperDto developer)
        {
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] UpdateDeveloperDto developer)
        {
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return Ok();
        }
    }
}
