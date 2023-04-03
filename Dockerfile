# Use the official Node.js image as the base image
FROM node:16-alpine

# Create and set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files into the container
COPY . .

# Build the application
RUN npm run build

# Expose the port used by the application
EXPOSE 3000

# Start the application
CMD ["npm", "start"]