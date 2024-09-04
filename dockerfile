FROM node:18-alpine
WORKDIR /app
COPY demo-app/package*.json ./
RUN npm install
COPY ./demo-app/ .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]