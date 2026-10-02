pipeline {
    agent any

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