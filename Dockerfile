FROM node:12.11.1-alpine
RUN apk --no-cache update \
&& apk --no-cache add g++ make bash zlib-dev libpng-dev \
&&  rm -fr /var/cache/apk/*

WORKDIR /usr/src/app

COPY package.json package.json ./
COPY yarn.lock yarn.lock ./

RUN yarn
COPY . .

ARG env
COPY .env.production .env.production

RUN yarn build

CMD [ "yarn",  "start:production" ]