FROM node:14-alpine

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 8000

ENV NAME EXAMPLE

CMD ["npm", "start"]