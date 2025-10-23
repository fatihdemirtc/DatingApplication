# Dating Application

A modern dating application built with ASP.NET Core Web API and Angular. This solution consists of two main parts:
- `API/`: .NET Core backend with Entity Framework Core and JWT authentication
- `Client/`: Angular frontend with signals and standalone components

## Prerequisites

- [.NET 9.0 SDK](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/) (v20.3.6 or later)
- [Angular CLI](https://angular.io/cli) (v20.3.6 or later)
- SQLite (included in .NET SDK)

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/fatihdemirtc/DatingApplication.git
cd DatingApplication
```

2. Set up and run the API:
```bash
cd API
dotnet restore
dotnet ef database update
dotnet run
```
The API will be available at `https://localhost:5001`

3. Set up and run the Angular client:
```bash
cd ../Client
npm install
ng serve
```
The client will be available at `http://localhost:4200`

## Project Structure

### API (.NET Core)

```
API/
├── Controllers/         # API endpoints
├── Data/               # EF Core context and migrations
├── DTOs/               # Data transfer objects
├── Entity/             # Domain models
├── Extensions/         # Extension methods
├── Helpers/           
├── Interfaces/         # Service contracts
├── Middleware/
└── Services/           # Service implementations
```

Key Features:
- Entity Framework Core with SQLite
- JWT Authentication
- Repository pattern
- AutoMapper for DTO mappings
- Identity for user management

### Client (Angular)

```
Client/
├── src/
│   ├── app/
│   │   ├── features/   # Feature modules
│   │   ├── layout/     # Shared layouts
│   │   └── shared/     # Shared components
│   ├── core/          # Core services
│   └── types/         # TypeScript types
```

Key Features:
- Angular v20 with standalone components
- Signals for state management
- Angular forms with custom controls
- JWT interceptor for auth
- Responsive design with TailwindCSS

## Development

### API Development

- Add a new migration:
```bash
dotnet ef migrations add "MigrationName"
```

- Update database:
```bash
dotnet ef database update
```

- Run API with watch mode:
```bash
dotnet watch run
```

### Client Development

- Generate a new component:
```bash
ng generate component components/name
```

- Build for production:
```bash
ng build --prod
```

## Authentication

The application uses JWT tokens for authentication. Protected API endpoints require a valid Bearer token.

Example protected route:
```csharp
[Authorize]
[HttpGet("api/members")]
public async Task<ActionResult<IEnumerable<MemberDto>>> GetMembers() 
{
    // ...
}
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.