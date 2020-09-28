# Node image
FROM node:latest

# Web server
RUN npm install -g http-server

# Create directory
RUN mkdir -p /usr/src/app

# Working directory
WORKDIR /usr/src/app

# Packages copy
COPY package.json /usr/src/app/

# Install dependencies
RUN npm install

# Copy project
COPY . /usr/src/app

# Run production build
RUN npm run build

# Expose server
EXPOSE 8080
CMD [ "http-server", "dist" ]