
# Node.js Web Application with Jenkins CI/CD

## Task 2
This Task demonstrates Continuous Integration and Continuous
Deployment (CI/CD) using Jenkins, Docker, Git, and GitHub.

## Technologies Used
- vagrant
- Node.js
- HTML and CSS
- Jenkins
- Docker
- Git and GitHub
- Ubuntu Linux

## Project Features
- Simple Node.js web application
- Application health endpoint at /health
- Automated application tests
- Docker image creation
- Container-based deployment
- Jenkins pipeline automation
- Periodic GitHub source-code polling

## Jenkins Pipeline Stages
1. Checkout: Retrieves code from GitHub.
2. Build: Checks the environment and builds the Docker image.
3. Test: Runs application tests.
4. Deploy: Runs the application in a Docker container.

## How to Run Locally
bash
npm test
npm start


Open http://localhost:2000 in a browser.

## How to Run with Docker
bash
docker build -t nodejs-cicd-webapp .
docker run -d --name nodejs-webapp -p 2000:2000 nodejs-cicd-webapp


Open http://localhost:2000.

## Health Check
bash
curl http://localhost:2000/health


## Outcome
Implemented a basic Jenkins CI/CD pipeline to build, test,
and deploy a Node.js web application using Docker.

