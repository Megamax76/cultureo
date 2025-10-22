# Quick Start Guide - Rafale Knowledge Bridge

## Prerequisites

- Node.js 20+ ([Download](https://nodejs.org/))
- Docker & Docker Compose ([Download](https://www.docker.com/))
- Git

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/Megamax76/cultureo.git
cd cultureo
```

### 2. Install Dependencies

```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..

# Install frontend dependencies
cd frontend
npm install
cd ..
```

### 3. Configure Environment Variables

```bash
# Backend
cp backend/.env.example backend/.env

# Frontend
cp frontend/.env.example frontend/.env
```

Edit the `.env` files with your configuration if needed.

### 4. Start Infrastructure Services (Docker)

```bash
docker-compose up -d
```

This will start:
- PostgreSQL (port 5432)
- Redis (port 6379)
- MinIO (ports 9000, 9001)
- Adminer (port 8080)

### 5. Setup Database

```bash
cd backend

# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate dev

# (Optional) Seed database with test data
npx prisma db seed
```

### 6. Start Development Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm run start:dev
```

Backend will be available at: `http://localhost:4000/api`
API Documentation (Swagger): `http://localhost:4000/api/docs`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

Frontend will be available at: `http://localhost:3000`

## Default Test Accounts

| Email | Password | Role |
|-------|----------|------|
| admin@dassault.fr | Admin123! | DASSAULT_ADMIN |
| user@dassault.fr | User123! | DASSAULT_USER |
| admin@tata.in | Admin123! | TATA_ADMIN |
| user@tata.in | User123! | TATA_USER |

## Useful Commands

### Backend

```bash
# Start development server
npm run start:dev

# Build for production
npm run build

# Run tests
npm run test

# Lint code
npm run lint

# Prisma Studio (Database GUI)
npx prisma studio
```

### Frontend

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

### Docker

```bash
# Start all services
docker-compose up -d

# Stop all services
docker-compose down

# View logs
docker-compose logs -f

# Rebuild services
docker-compose up -d --build
```

## Troubleshooting

### Port Already in Use

If you get "port already in use" errors, check if services are running:

```bash
# Check what's using port 4000 (backend)
lsof -i :4000

# Check what's using port 3000 (frontend)
lsof -i :3000

# Check what's using port 5432 (postgres)
lsof -i :5432
```

### Database Connection Issues

1. Check if PostgreSQL is running:
```bash
docker-compose ps postgres
```

2. Verify DATABASE_URL in `backend/.env`

3. Restart PostgreSQL:
```bash
docker-compose restart postgres
```

### Prisma Client Errors

If you encounter Prisma Client errors:

```bash
cd backend
npx prisma generate
npx prisma migrate deploy
```

## Next Steps

- Read the [Architecture Documentation](../../ARCHITECTURE.md)
- Explore the [API Documentation](http://localhost:4000/api/docs)
- Check the [User Guide](../user-guide/README.md) (coming soon)

## Support

For issues or questions:
- GitHub Issues: https://github.com/Megamax76/cultureo/issues
- Email: knowledge-bridge-support@dassault-aviation.com
