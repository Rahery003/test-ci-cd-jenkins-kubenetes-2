pipeline {
    agent any

    environment {
        IMAGE_TAG = "andrianasolo/react-test:${BUILD_NUMBER}"
        IMAGE_LATEST = "andrianasolo/react-test:latest"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Rahery003/test-ci-cd-jenkins-kubenetes-2.git'
            }
        }

        stage('Docker Build') {
            steps {
                sh '''
                docker build -t $IMAGE_TAG .
                docker tag $IMAGE_TAG $IMAGE_LATEST
                '''
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-creds', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh '''
                    echo "$PASS" | docker login -u "$USER" --password-stdin
                    docker push $IMAGE_TAG
                    docker push $IMAGE_LATEST
                    '''
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                withCredentials([file(credentialsId: 'kubeconfig-id', variable: 'KUBECONFIG_FILE')]) {
                    sh '''
                    export KUBECONFIG=$KUBECONFIG_FILE
                    kubectl apply -f deployment2.yaml
                    kubectl apply -f https://raw.githubusercontent.com/projectcalico/calico/v3.26.1/manifests/calico.yaml
                    '''
                }
            }
        }

        stage('Success') {
            steps {
                echo "✅ Déploiement terminé avec succès !"
                echo "📦 Image déployée : $IMAGE_TAG et mise à jour de :latest"
            }
        }
    }

    post {
        failure {
            echo "❌ Échec du pipeline."
        }
        success {
            echo "🎉 Pipeline terminé avec succès."
        }
    }
}
