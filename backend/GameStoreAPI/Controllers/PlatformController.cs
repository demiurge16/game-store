using GameStoreAPI.Dto;
using GameStoreAPI.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace GameStoreAPI.Controllers
{
    [Route("api/v1/platforms")]
    [ApiController]
    public class PlatformController : Controller
    {
        private readonly IPlatformService _platformService;

        public PlatformController(IPlatformService platformService)
        {
            _platformService = platformService;
        }

        [HttpGet]
        public IList<PlatformViewDto> Get()
        {
            IList<PlatformViewDto> result = _platformService.GetAll()
                .Select(p => p.ToView())
                .ToList();

            return result;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok();
        }

        [HttpPost]
        public IActionResult Post([FromBody] CreatePlatformDto platform)
        {
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] UpdatePlatformDto platform)
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
