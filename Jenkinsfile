
pipeline {
    agent any

    triggers {
        pollSCM('H/2 * * * *')
    }

    environment {
        APP_NAME = 'nodejs-cicd-webapp'
        CONTAINER_NAME = 'nodejs-webapp'
        APP_PORT = '2000'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh 'node --version'
                sh 'npm --version'
                sh 'docker build -t nodejs-cicd-webapp .'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    docker rm -f "$CONTAINER_NAME" || true

                    docker run -d \
                      --name "$CONTAINER_NAME" \
                      --restart unless-stopped \
                      -p "$APP_PORT:2000" \
                      "$APP_NAME"
                '''
            }
        }
    }

    post {
        success {
            echo 'CI/CD pipeline completed successfully!'
            echo 'Web application is deployed on port 3000.'
        }

        failure {
            echo 'Pipeline failed. Check the Jenkins console output.'
        }
    }
}

