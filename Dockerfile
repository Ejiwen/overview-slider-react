FROM node:14.17.3

WORKDIR /code

ENV PORT 3000

COPY package.json /code/package.json

RUN npm install

COPY . /code

CMD [ "node", "server/index.js" ]