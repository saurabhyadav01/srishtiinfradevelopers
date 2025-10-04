
FROM node:18
WORKDIR /var/www/arglin
COPY package.json ./
RUN yarn cache clean
RUN yarn
COPY . .
RUN yarn run build
EXPOSE 3000
CMD ["yarn","run","start"]
