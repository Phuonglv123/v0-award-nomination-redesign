# Use the official Node.js runtime as the base image
FROM node:20-alpine

# Install dependencies
RUN apk add --no-cache libc6-compat

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN corepack enable pnpm && pnpm i --frozen-lockfile

# Copy source code
COPY . .

# Set environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Build the application
RUN pnpm run build

# Create user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
RUN chown -R nextjs:nodejs /app

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Set runtime environment
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start the application
CMD ["pnpm", "start"]
