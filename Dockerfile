
FROM node:22-alpine

WORKDIR /app

COPY package.json ./
COPY server.js test.js ./
COPY public ./public

ENV PORT=2000

EXPOSE 2000

CMD ["npm", "start"]

