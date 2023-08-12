# Use an official Node.js runtime as the base image
FROM node:14 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React Vite app
RUN npm run build

# Use a smaller image for serving the app
FROM nginx:alpine

RUN apk add vim

# Copy the built app from the previous stage to the nginx web directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 to the host
EXPOSE 80

# Start nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
