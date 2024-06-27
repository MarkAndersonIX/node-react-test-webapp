FROM node:14 

# Copy the backend and client source code TODO: prune out unnecessary files/folders
WORKDIR /app
COPY . .

# Install backend dependencies
RUN npm install

# Install client dependencies
WORKDIR /app/client
RUN npm install

# Rebuild dependencies
RUN npm rebuild

# Return to workdir
WORKDIR /app

# Expose the port the app runs on
EXPOSE 3000
EXPOSE 3001

# Command to run the backend server
CMD ["npm", "run", "launch"]