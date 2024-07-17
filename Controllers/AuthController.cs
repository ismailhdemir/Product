using Microsoft.AspNetCore.Mvc;
using ProductWeb.Models;
using ProductWeb.Services.Interfaces;
using System.Threading.Tasks;

namespace ProductWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUserService _userService;

        public AuthController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("login")]
        public async Task<ActionResult<User>> Login([FromBody] User user)
        {
            if (string.IsNullOrEmpty(user.PasswordHash))
                return BadRequest("Password is required.");

            var loggedInUser = await _userService.ValidateUser(user.Username, user.PasswordHash);
            if (loggedInUser == null)
                return Unauthorized();

            return Ok(loggedInUser);
        }

        [HttpPost("register")]
        public async Task<ActionResult<User>> Register([FromBody] User newUser)
        {
            if (string.IsNullOrEmpty(newUser.Username) || string.IsNullOrEmpty(newUser.PasswordHash))
                return BadRequest("Username and Password are required.");

            var createdUser = await _userService.CreateUser(newUser);
            return CreatedAtAction(nameof(Register), new { id = createdUser.Id }, createdUser);
        }
    }
}
