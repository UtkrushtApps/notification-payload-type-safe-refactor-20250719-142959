#!/bin/sh
set -e

if ! command -v npm >/dev/null 2>&1; then
  echo "[ERROR] npm (Node.js) is required but not installed."
  exit 1
fi

echo "[INFO] Installing dependencies..."
npm install

echo "[INFO] Building TypeScript..."
npm run build

echo "[INFO] Installation and build finished."
