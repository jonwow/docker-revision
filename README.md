# docker-revision

**Docker can be used to package software so it would run on any hardware. For example, it might work on my machine but if another user has a different version of node and/or other hardware, it may break without docker.**

Dockerfile is a blueprint to build the docker image.

Image - template/immutable snapshot for running docker containers. Typically uploaded to the cloud on public/private registries. After pulling and running them, you create a container.  d

Container - a running process, i.e. node app.

Volume - dedicated folder on the host machine (shared files for one/multiple containers). The files are kept after the containers are shut down.

Docker compose - multiple containers at the same time.



**Useful**:
* Docker VSCode extension
* docker ps (running containers)
* docker build -t jonwow/node-app:1.0 .
* port forwarding: docker run -p 5000:8080 {image sha}
* docker volume create shared-data
