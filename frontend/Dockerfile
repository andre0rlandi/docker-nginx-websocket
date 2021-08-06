FROM node:14 as build

ARG REACT_APP_SERVICES_HOST=/

WORKDIR /app

COPY ./package.json /app/package.json

RUN yarn install

COPY . .

RUN yarn build

FROM nginx

COPY --from=build /app/build /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf