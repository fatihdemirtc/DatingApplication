# Dating Application API

ASP.NET Core Web API backend built following Neil Cummings' comprehensive course, implementing best practices in authentication, real-time communication, and cloud deployment.

## Implementation Details

### Authentication & Security
- JWT token implementation with secure storage
- Password hashing and security best practices
- Role-based authorization
- Token refresh mechanism

### Data & Storage
- Entity Framework Core with SQL Server
- Repository Pattern implementation
- Unit of Work Pattern
- Cloudinary integration for photo storage
- Database migrations and seeding

### Real-time Features
- SignalR implementation
- Live chat functionality
- User presence tracking
- Real-time notifications

### API Architecture
- Clean Architecture principles
- SOLID design patterns
- Dependency Injection
- Custom middleware implementation
- Global error handling

### Cloud & DevOps
- Azure deployment ready
- Docker containerization
- CI/CD pipeline support
- Environment-based configurations

## Project Structure

```
API/
├── Controllers/           # API endpoints and route handlers
│   ├── AccountController # Auth endpoints
│   ├── BaseApiController # Base controller with common functionality
│   └── MembersController # Member management endpoints
├── Data/                 # Data access and database context
│   ├── AppDbContext     # EF Core database context
│   ├── Migrations       # Database migrations
│   └── Seed            # Seed data for development
├── DTOs/                 # Data Transfer Objects
│   ├── LoginDto        # Login request model
│   ├── RegisterDto     # Registration request model
│   └── UserDto         # User response model
├── Entity/               # Domain models
│   ├── AppUser         # User entity
│   ├── Member          # Member profile entity
│   └── Photo           # Photo entity
├── Extensions/           # Extension methods
├── Interfaces/          # Service interfaces
└── Services/            # Service implementations
```

## Getting Started

1. Install dependencies:
```bash
dotnet restore
```

2. Update database with latest migrations:
```bash
dotnet ef database update
```

3. Run the API:
```bash
dotnet run
```

The API will be available at:
- HTTPS: `https://localhost:5001`
- HTTP: `http://localhost:5000`

## Database Migrations

Add a new migration:
```bash
dotnet ef migrations add "MigrationName"
```

Apply migrations:
```bash
dotnet ef database update
```

Remove last migration:
```bash
dotnet ef migrations remove
```

## Authentication

The API uses JWT tokens for authentication. Protected endpoints require a valid Bearer token.

To authenticate:

1. Register a new user:
```http
POST /api/account/register
Content-Type: application/json

{
    "email": "user@example.com",
    "password": "Pa$$w0rd",
    "displayName": "User"
}
```

2. Login to get a token:
```http
POST /api/account/login
Content-Type: application/json

{
    "email": "user@example.com",
    "password": "Pa$$w0rd"
}
```

3. Use the token in subsequent requests:
```http
GET /api/members
Authorization: Bearer <your-token>
```

## Development Environment

### Required Tools

- [.NET 9.0 SDK](https://dotnet.microsoft.com/download)
- [Visual Studio 2025](https://visualstudio.microsoft.com/) or [VS Code](https://code.visualstudio.com/)

### VS Code Extensions

- C# Dev Kit
- .NET Core Test Explorer
- SQLite Viewer

### Configuration

Application settings are managed in:
- `appsettings.json` - Production settings
- `appsettings.Development.json` - Development settings

Key settings:
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Data source=dating.db"
  },
  "TokenKey": "your-secret-key-min-64-chars"
}
```

## API Documentation

### Authentication Endpoints

#### Register New User
```http
POST /api/account/register
Content-Type: application/json

{
    "email": "user@example.com",
    "password": "Pa$$w0rd",
    "displayName": "User"
}
```

#### Login
```http
POST /api/account/login
Content-Type: application/json

{
    "email": "user@example.com",
    "password": "Pa$$w0rd"
}
```

### Member Endpoints

#### Get All Members
```http
GET /api/members
Authorization: Bearer <token>
```

#### Get Member by ID
```http
GET /api/members/{id}
Authorization: Bearer <token>
```

## Testing

Run tests:
```bash
dotnet test
```

## Deployment

1. Build for production:
```bash
dotnet publish -c Release
```

2. Output will be in `bin/Release/net9.0/publish/`

## Common Issues

### Migration Errors

If you get "The model was changed since the last migration":
```bash
dotnet ef migrations add "UpdateModelChanges"
dotnet ef database update
```

### JWT Token Issues

Ensure TokenKey in appsettings.json:
- Is at least 64 characters
- Matches between development and production
- Is properly secured in production