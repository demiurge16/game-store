using GameStoreAPI.Dto;
using GameStoreAPI.Services;
using GameStoreAPI.WebInterface;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace GameStoreAPI.Controllers
{
    [Route("api/v1/games")]
    [ApiController]
    public class GameController : Controller
    {
        private readonly IGameService _gameService;

        public GameController(IGameService gameService)
        {
            _gameService = gameService;
        }

        [HttpGet]
        public IList<GameViewDto> Get([FromQuery] GameListQueryWebInterface query)
        {
            IList<GameViewDto> result =  _gameService.GetGames(query.ToQuery())
                .Select(e => e.ToView())
                .ToList();

            return result;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok();
        }

        [HttpPost]
        public IActionResult Post([FromBody] GameCreateDto game)
        {
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] GameUpdateDto game)
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
