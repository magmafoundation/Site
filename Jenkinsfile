pipeline {
  stages {
    stage('Docker-Build') {
    steps {
         script {
          dockerImage = docker.build("hexeption/magma-api:$BUILD_NUMBER", "--no-cache . ")
          dockerImage.push()
        }
      }
    }
  }
}
