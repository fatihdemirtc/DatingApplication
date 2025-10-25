using System;
using System.ComponentModel.DataAnnotations;

namespace API.Entity;

public class Group(string name)
{
    [Key]
    public string Name { get; set; } = name;

    // nav properties
    public ICollection<Connection> Connections { get; set; } = [];
}
