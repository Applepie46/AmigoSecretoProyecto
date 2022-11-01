FROM node:9-slim
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]