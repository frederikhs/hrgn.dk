FROM node:alpine AS development
WORKDIR /src
RUN chown node:node .
USER node
CMD npm install && npm run dev

FROM node:alpine AS build
WORKDIR /src
COPY src/package*.json .
RUN npm install

COPY src .
ARG VERSION
ENV REACT_APP_VERSION=$VERSION
RUN npm run build

FROM nginx:mainline-alpine AS production
RUN rm /etc/nginx/conf.d/*
COPY server.conf /etc/nginx/conf.d/nginx.conf

COPY --from=build --chown=nginx:nginx /src/dist /usr/share/nginx/html
