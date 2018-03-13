FROM node:9.6.1

RUN mkdir -p /src/service-suggestions

WORKDIR /src/service-suggestions

COPY package.json /src/service-suggestions

RUN npm install

COPY . /src/service-suggestions

EXPOSE 4001

CMD [ "npm", "run",  "docker" ]