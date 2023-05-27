FROM node:18-alpine
RUN mkdir -p /usr/src/app/node_modules
WORKDIR /usr/src/app

COPY package*.json ./

COPY --chown=node:node . . 

RUN npm install --unsafe-perm=true

EXPOSE 4000

CMD ["npm", "run", "dev"]