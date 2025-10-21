using System;
using System.Security.Cryptography;
using System.Text;
using API.Data;
using API.DTOs;
using API.Entity;
using API.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class AccountController(AppDbContext context,ITokenService tokenService):BaseApiController
{
    [HttpPost("register")]
    public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
    {
        if (await EmailExists(registerDto.Email)) return BadRequest("Email already taken");

        using var hmac = new HMACSHA512();
        var user = new AppUser
        {
            DisplayName = registerDto.DisplayName,
            Email = registerDto.Email,
          
        };
        context.Users.Add(user);
        await context.SaveChangesAsync();

        return user.ToDto(tokenService);

    }

    [HttpPost("login")]
    public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
    {
        var user = await context.Users.SingleOrDefaultAsync(x => x.Email == loginDto.Email);

        if (user == null) return Unauthorized("Invalid email address");

       
        return user.ToDto(tokenService);
    }
    
    public async Task<bool> EmailExists(string email)
    {
        return await context.Users.AnyAsync(x => x.Email.ToLower() == email.ToLower());
    }
}
