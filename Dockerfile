# Use official Playwright image with dependencies and browsers
FROM mcr.microsoft.com/playwright:v1.54.2-jammy



# Install CA certificates so browsers trust HTTPS certs
RUN apt-get update && apt-get install -y ca-certificates


# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of your test project
COPY . .

# Default command (optional: run tests automatically)
CMD ["npx", "playwright", "test"]
