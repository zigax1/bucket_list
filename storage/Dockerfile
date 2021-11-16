FROM node:16.13.0-alpine as node

WORKDIR /usr/src/app

COPY . ./

RUN npm install --legacy-peer-deps && ./node_modules/.bin/ng build --output-path=dist 
#--output-path=dist je zato, ker imam zaseden port 80

FROM nginx:1.18.0-alpine

COPY --from=node /usr/src/app/dist /usr/share/nginx/html