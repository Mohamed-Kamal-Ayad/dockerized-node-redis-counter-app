# Node.js Express App with Redis using Docker

## Overview

This repository contains a simple Node.js Express application that tracks requests and utilizes Redis caching. The project is set up to be run in Docker containers for easy deployment and scalability.

## Prerequisites

Before getting started, ensure that you have the following installed on your system:

- Docker
- Docker Compose

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Mohamed-Kamal-Ayad/dockerized-node-redis-counter-app
   cd dockerized-node-redis-counter-app
   ```

2. Start the Docker containers:

   ```bash
   docker-compose up -d
   ```

   This will launch the Node.js app and Redis in separate containers.

3. Access the application:

   Open your browser and go to [http://localhost:5000](http://localhost:5000) to interact with the Node.js app.

## Monitoring Redis

To access the Redis cache and monitor the data, you can use the following steps:

1. Access the Redis container:

   ```bash
   docker exec -it dockerized-node-redis-counter-app-redis-1 sh
   ```

2. Start the Redis CLI:

   ```bash
   redis-cli
   ```

   You can now run Redis commands to monitor and manage the cache.

## Stopping the Application

To stop the application and remove the containers, run:

```bash
docker-compose down
```
