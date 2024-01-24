FROM node:latest
ADD . /code
WORKDIR /code


SHELL [ "/bin/bash", "-c" ]
RUN npm init -y && npm i $(cat packages.txt)
