using API.Entity;

public interface ITokenService
{
    Task<string> CreateToken(AppUser user);
    string GenerateRefreshToken();
}