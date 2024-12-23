FROM node:20
# alternatively you can use FROM strapi/base:latest

# Set up working directory
WORKDIR /app

# Copy package.json to root directory
COPY package*.json ./

# Install dependencies, but not generate a yarn.lock file and fail if an update is needed
RUN npm install

# Copy strapi project files
COPY . .

# Build admin panel
RUN npm run build

# Run on port 1337
EXPOSE 1337

# Start strapi server
CMD ["npm", "run", "develop"]