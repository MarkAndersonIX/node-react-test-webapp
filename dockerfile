# Stage 1: Build the React frontend
FROM node:14 AS build

WORKDIR /app

# Copy the frontend code and install dependencies
COPY client/package*.json ./client/
WORKDIR /app/client
RUN npm install

# Build the React app
COPY client/ .
RUN npm run build

# Stage 2: Set up the Node.js backend and serve the React app
FROM node:14

WORKDIR /app

# Copy backend dependencies
COPY package*.json ./
RUN npm install

# Copy the backend source code
COPY . .

# Copy the built React app from the first stage
COPY --from=build /app/client/build /app/client/build

# Expose the port the app runs on
EXPOSE 3000
EXPOSE 3001

# Command to run the backend server
CMD ["npm", "run", "launch"]