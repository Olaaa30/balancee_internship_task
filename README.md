# Balancee Internship Task

This project is a web application built using Next.js, containerized with Docker, and deployed using a CI/CD pipeline powered by GitHub Actions. Nginx is used as a reverse proxy to manage incoming traffic to the application and the goal is to ensure a smooth and automated deployment process, with each stage of the pipeline building on the previous one.

## Features
- **Next.js**: Used for the frontend, enabling server-side rendering (SSR) and static site generation (SSG).
- **Docker**: The app is fully containerized, ensuring a consistent runtime environment.
- **Nginx**: Used as a reverse proxy to route traffic to the containerized Next.js app.
- **GitHub Actions**: A multi-stage CI/CD pipeline automates testing, building, and deploying the application.
- **Docker Compose**: Manages multiple containers, simplifying the setup for local and the staging environments.

## Setup

### Docker
I used Docker to containerize the Next.js app, this ensures consistency across all environments. A `Dockerfile` is created for the app, which installs dependencies, builds the application, and serves it in the staging environment.

### Docker Compose
`docker-compose.yml` is used to orchestrate the Next.js app and Nginx containers, providing an easy way to manage multi-container applications.

### Nginx
Nginx acts as a reverse proxy, forwarding traffic from port 80 to the Next.js app running on port 3000. This ensures that external users can access the app via a single entry point (Nginx) without directly exposing the app's internal port.

### GitHub Actions CI/CD Pipeline
The CI/CD pipeline is designed to automate the build, test, and deployment process.

### Pipeline Stages:
- **Build**: Installs dependencies and builds the Next.js app.
- **Test**: Runs unit tests to verify that the app works as expected.
- **Build Docker Image**: Builds a Docker image of the app and pushes it to a container registry.
- **Deploy**: Deploys the Docker image using docker-compose, pulling the latest version and restarting services.

This multi-stage approach ensures that only tested and validated code is deployed to the staging environment, reducing the chances of bugs and failures.

## Why These Choices?
- **Next.js**: Chosen for its flexibility in SSR and static site generation, which is essential for building high-performance web applications.
- **Docker**: Ensures the application runs in the same environment, whether locally or in the staging environment.
- **Nginx**: Acts as a reverse proxy to simplify traffic management and provide flexibility for handling multiple services.
- **GitHub Actions**: Github Actions Provides a seamless CI/CD experience, integrating well with Docker and allowing for full automation of the deployment process.

# Getting Started

## Prerequisites
- Docker installed on your machine.
- Docker Compose installed.
- GitHub repository with access to GitHub Actions.

## Triggering the CI/CD Pipeline
The pipeline is automatically triggered when:

- Code is pushed to the main branch.
- A pull request is made to the main branch.

You can manually trigger the pipeline from the Actions tab on GitHub as well.

## Running Locally
Clone the repository:
```bash
git clone https://github.com/Olaaa30/balancee_internship_task.git
```

After cloning the repository, you would need to modify the docker-compose file accordingly.

```yaml
version: '3.8'

services:
  nextjs-app:
    build: ./nextjs
    ports:
      - "3000:3000"
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - nextjs-app

```

Then:
```bash
cd balancee_internship_task

docker-compose up --build
```

### You can then view the app running on [http://localhost:3000](port)


