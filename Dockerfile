FROM node:latest
WORKDIR /app

# copy the compiled js files and needed files 
COPY ./dist .
COPY ./package.json .
COPY ./package-lock.json .
COPY ./yarn.lock .

RUN yarn install

CMD [ "node", "/app/main.js" ]