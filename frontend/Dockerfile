# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first (leverage Docker caching)
COPY package.json ./

# Install dependencies using npm ci
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose Vite's default port
EXPOSE 5173

# Set up polling for file changes
ENV CHOKIDAR_USEPOLLING=true

# Run the development server
CMD ["npm", "run", "dev"]
