# docker-revision

Docker can be used to package software so it would run on any hardware. For example, it might work on my machine but if another user has a different version of node and/or other hardware, it may break without docker.


Dockerfile is a blueprint to build the docker image.

Image - template/immutable snapshot for running docker containers. Typically uploaded to the cloud on public/private registries. After pulling and running them, you create a container.

Container - a running process, i.e. node app.