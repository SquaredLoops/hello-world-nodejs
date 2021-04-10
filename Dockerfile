# The base image that we are building on top of
FROM node:15-alpine

# Copy the files into our container
COPY . /src

# Change to this folder and install of the NPM packages
RUN cd /src && npm install

# Expose port 8080 so that traffic can access our container
EXPOSE 8080

# Start Node.js
CMD ["node", "/src/app.js"]
