using System;

namespace API.Helpers;

public class PaginatedResult<T>
{
    public PaginationMetaData MetaData { get; set; } = default!;
    public List<T> Items { get; set; } = default!;
};

public class PaginationMetaData
{
    public int CurrentPage { get; set; }
    public int PageSize { get; set; }
    public int TotalCount { get; set; }
    public int TotalPages { get; set; }
};
public class PaginationHelper
{
    public static async Task<PaginatedResult<T>> CreateAsync<T>(IQueryable<T> query, int pageNumber, int pageSize)
    {
        var count = await Task.FromResult(query.Count());
        var items = await Task.FromResult(query.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToList());

        var metaData = new PaginationMetaData
        {
            CurrentPage = pageNumber,
            PageSize = pageSize,
            TotalCount = count,
            TotalPages = (int)Math.Ceiling(count / (double)pageSize)
        };

        return new PaginatedResult<T>
        {
            MetaData = metaData,
            Items = items
        };
    }
}
