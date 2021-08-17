FROM node:latest
WORKDIR /app

# copy the compiled js files
COPY ./dist .