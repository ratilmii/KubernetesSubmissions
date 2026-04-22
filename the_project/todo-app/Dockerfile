FROM node:25-alpine

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm ci --only=production

COPY . .

CMD ["node", "index.js"]