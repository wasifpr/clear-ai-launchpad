# ---------- Stage 1: install dependencies ----------
FROM oven/bun:1 AS deps
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# ---------- Stage 2: build the TanStack Start / Nitro app ----------
FROM oven/bun:1 AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# node-server preset produces a plain Node server bundle in .output
ENV NITRO_PRESET=node-server
RUN bun run build

# ---------- Stage 3: slim production runtime ----------
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
# Nitro output is fully self-contained (server bundle + public assets)
COPY --from=build /app/.output ./.output
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
