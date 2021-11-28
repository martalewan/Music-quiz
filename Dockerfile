FROM node:16.13-alpine

RUN adduser -D node-user
USER node-user

RUN mkdir -p /home/node-user/app && chown node-user:node-user /home/node-user/app
WORKDIR /home/node-user/app

COPY --chown=node-user:node-user /client /home/node-user/app
WORKDIR /home/node-user/app/client
RUN npm install
RUN npm run build

WORKDIR /home/node-user/app
COPY --chown=node-user:node-user package.json package-lock.json /home/node-user/app
RUN npm install

COPY . .

CMD npm start
EXPOSE 3000