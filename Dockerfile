FROM node:latest
WORKDIR /app

# copy the compiled js files and needed files 
COPY ./dist .
COPY ./app/views ./views
COPY ./package.json .

RUN yarn install

CMD [ "node", "main.js" ]