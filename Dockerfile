FROM node:24.13.0-bookworm-slim

WORKDIR /app

COPY package.json .

RUN npm install -f

COPY . .

# EXPOSE 5001
EXPOSE 8050

CMD ["npm", "start"]