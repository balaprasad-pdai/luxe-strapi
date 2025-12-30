# -----------------------------
# 1️⃣ Build Stage
# -----------------------------
FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# -----------------------------
# 2️⃣ Runtime Stage
# -----------------------------
FROM node:18-alpine
WORKDIR /app

# Optional: make npm more resilient
RUN npm set fetch-retries=5 && \
    npm set fetch-retry-mintimeout=20000 && \
    npm set fetch-retry-maxtimeout=120000 && \
    npm config set registry https://registry.npmjs.org/

COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /app ./

ENV NODE_ENV=production
ENV PORT=1337
EXPOSE 1337

CMD ["npm", "start"]
