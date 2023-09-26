FROM node:18-alpine
WORKDIR /app
COPY . .
CMD \[ -d "node_modules" \] && yarn run dev --host || yarn install --frozen-lockfile && yarn run dev --host

