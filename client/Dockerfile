## Build
FROM node:14-alpine AS reactbuilder
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm ci
# Bundle app source
COPY . .
RUN npm run build

## Run
FROM nginx:1.19-alpine
#COPY build/ /usr/share/nginx/html
COPY --from=reactbuilder  /usr/src/app/build /usr/share/nginx/html
