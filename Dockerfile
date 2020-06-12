FROM jrottenberg/ffmpeg
FROM node:14.3.0-stretch

RUN apt-get -y update
RUN apt-get -y upgrade
RUN apt-get install -y ffmpeg

WORKDIR /var/app
COPY package.json /var/app
RUN npm install
COPY . /var/app


CMD ["npm", "run", "start"]