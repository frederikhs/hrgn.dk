FROM node:alpine as development
WORKDIR /src
RUN chown node:node .
USER node
CMD npm install && npm run start

FROM node:alpine as build
WORKDIR /src
COPY src/package*.json .
RUN npm install

COPY src .
ARG VERSION
ENV REACT_APP_VERSION=$VERSION
RUN npm run build

FROM nginx:mainline-alpine as production
COPY server.conf /etc/nginx/conf.d/nginx.conf

COPY --from=build --chown=nginx:nginx /src/build /usr/share/nginx/html
