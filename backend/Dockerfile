# Multi-stage build for NestJS backend

# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY backend/package*.json ./backend/

# Install dependencies
RUN npm ci

# Copy prisma schema
COPY backend/src/prisma ./backend/src/prisma

# Generate Prisma Client
WORKDIR /app/backend
RUN npx prisma generate

# Copy source code
WORKDIR /app
COPY backend ./backend

# Build application
WORKDIR /app/backend
RUN npm run build

# Stage 2: Production
FROM node:20-alpine

WORKDIR /app

# Install dumb-init for proper signal handling
RUN apk add --no-cache dumb-init

# Copy package files
COPY --from=builder /app/backend/package*.json ./

# Install production dependencies only
RUN npm ci --only=production

# Copy built application
COPY --from=builder /app/backend/dist ./dist
COPY --from=builder /app/backend/src/prisma ./src/prisma
COPY --from=builder /app/backend/node_modules/.prisma ./node_modules/.prisma

# Create non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nestjs -u 1001
USER nestjs

EXPOSE 4000

# Use dumb-init to handle signals properly
ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "dist/main"]
