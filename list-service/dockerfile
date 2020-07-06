FROM node:14.3.0-stretch

WORKDIR /var/app
COPY package.json /var/app
RUN npm install
COPY . /var/app


CMD ["npm", "run", "start"]