using API.Entity;

public interface ITokenService
{
    string CreateToken(AppUser user);
    
}