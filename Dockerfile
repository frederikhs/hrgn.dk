FROM node:alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY src src
COPY gulpfile.mjs .
RUN npm run build

FROM nginx:mainline-alpine AS production
RUN rm /etc/nginx/conf.d/*
COPY <<EOF /etc/nginx/conf.d/nginx.conf
server {
    server_tokens off;
    listen 80 default_server;
    server_name _;

    root    /usr/share/nginx/html;
    include /etc/nginx/mime.types;

    location ~* \.css\$ {
        expires 1y;
        add_header Pragma public;
        add_header Cache-Control "public";
        etag off;
    }

    location / {
        try_files \$uri \$uri/index.html =404;
    }
}
EOF

COPY --from=build --chown=nginx:nginx /app/dist /usr/share/nginx/html
