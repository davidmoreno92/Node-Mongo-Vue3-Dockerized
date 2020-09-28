# Node image
FROM node:latest

# Create directory
RUN mkdir -p /usr/src/api

# Working directory
WORKDIR /usr/src/api

# Packages copy
COPY package.json /usr/src/api/

# Install dependencies
RUN npm install

# Copy project
COPY . /usr/src/api

# Run production build
RUN npm run build

# Expose server
EXPOSE 3000
CMD [ "node", "build/server.js" ]