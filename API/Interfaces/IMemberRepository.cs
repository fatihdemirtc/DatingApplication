using System;
using API.Entity;
using API.Helpers;

namespace API.Interfaces;

public interface IMemberRepository
{
    void Update(Member member);
    Task<PaginatedResult<Member>> GetMembersAsync(MemberParams  pagingParams);
    Task<Member?> GetMemberByIdAsync(string id);
    Task<IReadOnlyList<Photo>> GetPhotosByMemberAsync(string memberId);
     Task<Member?> GetMemberForUpdate(string id);
}
