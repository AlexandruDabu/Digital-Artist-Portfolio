# Stage 1: Build the application
FROM node:18 AS builder

# Set the working directory in the container
WORKDIR /backend

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application
FROM node:18

# Set the working directory in the container
WORKDIR /backend

# Copy built application from the builder stage
COPY --from=builder /backend/dist ./dist
COPY --from=builder /backend/node_modules ./node_modules
COPY --from=builder /backend/package*.json ./

# Expose the port the app runs on
EXPOSE 8080

# Define the command to run your app
CMD ["node", "dist/src/main"]
