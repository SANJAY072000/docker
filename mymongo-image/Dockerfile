# step 1 is to get a base image and base image is actually an OS
FROM alpine


# step 2 is to install a software and configure it
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/main' >> /etc/apk/repositories
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/community' >> /etc/apk/repositories
RUN apk update
RUN apk add mongodb=3.4.4-r0


# step 2.5 to configure software
VOLUME [ "/data/db" ]
WORKDIR /data
EXPOSE 27017


# step 3 is to set default commands
CMD ["mongod"]






