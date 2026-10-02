pipeline {
    agent any

    environment {
        PATH = "/home/rajan_kumar_gautam/.nvm/versions/node/v20.20.2/bin:${env.PATH}"
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building Node.js application...'
                sh 'node --version'
                sh 'npm --version'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deployment stage completed for practice'
            }
        }
    }
}