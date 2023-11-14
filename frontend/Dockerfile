FROM node:18-alpine as build-stage
COPY ./package*.json /TP1/
WORKDIR /TP1/
RUN npm install
COPY . /TP1/
RUN npm run build

# Phase 2 production
FROM nginx:1.24.0-alpine as production-stage

# Copy your custom nginx.conf from the local folder to the container
COPY ./nginx.conf /etc/nginx/nginx.conf

# Copy the build artifacts from the build stage to NGINX
COPY --from=build-stage /TP1/dist /usr/share/nginx/html
