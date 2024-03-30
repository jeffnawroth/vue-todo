#Backend
FROM node:lts-alpine
WORKDIR /app
COPY ./backend/package*.json ./
RUN npm install -g pnpm
RUN pnpm install
COPY ./backend .

EXPOSE 8080
CMD ["pnpm", "run", "serve"]
