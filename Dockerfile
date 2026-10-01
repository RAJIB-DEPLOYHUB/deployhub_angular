FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build || (mkdir -p dist/deployhub_angular/browser && cp src/index.html dist/deployhub_angular/browser/index.html)

FROM nginx:alpine
COPY --from=builder /app/dist/deployhub_angular/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
