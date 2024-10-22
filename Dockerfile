# Use an official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .

# Install the app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application port (3000)
EXPOSE 3000

# Command to run the server
CMD ["node", "server.js"]