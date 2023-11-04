# Use an official Node.js runtime as a parent image
FROM node

RUN mkdir /myApp

# Create and set the working directory in the container
WORKDIR /myApp

# Bundle the application code inside the Docker image
COPY package*.json server.js /myApp/

# Install application dependencies
RUN npm install

# Expose the port your application will run on
EXPOSE 8088

# Define the command to start your Node.js application
CMD [ "node", "server.js" ]