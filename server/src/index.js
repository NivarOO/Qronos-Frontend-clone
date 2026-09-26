try {
  require("dotenv").config();
} catch {
  // dotenv is optional in production environments
}

const express = require("express");
const cors = require("cors");
const path = require("path");
const { connect, isConnected } = require("./db");
const { SITE_CONTENT } = require("./seedData");
const SiteContent = require("./models/SiteContent");

const PORT = process.env.PORT || 5000;
const startedAt = Date.now();

const app = express();
app.disable("x-powered-by");
app.use(cors());
app.use(express.json());

// Tiny request logger (no extra deps).
app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    console.log(`${req.method} ${req.originalUrl} ${res.statusCode} ${Date.now() - start}ms`);
  });
  next();
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    db: isConnected() ? "connected" : "memory",
    uptime: Math.floor((Date.now() - startedAt) / 1000),
    version: "1.0.0",
  });
});

/**
 * Full site content. Served from MongoDB when reachable,
 * otherwise from the in-memory seed snapshot (identical values).
 */
app.get("/api/content", async (req, res) => {
  try {
    if (isConnected()) {
      const doc = await SiteContent.findOne({ key: "site" }).lean();
      if (doc && doc.data) {
        return res.json({ source: "mongo", data: doc.data });
      }
    }
  } catch (error) {
    console.warn(`[api] mongo read failed (${error.message}) — using memory`);
  }
  return res.json({ source: "memory", data: SITE_CONTENT });
});

// Production: serve the Vite client build (everything except /api/*).
if (process.env.NODE_ENV === "production") {
  const dist = path.resolve(process.env.CLIENT_DIST || "../client/dist");
  app.use(express.static(dist));
  app.get(/^(?!\/api\/).*/, (req, res) => {
    res.sendFile(path.join(dist, "index.html"));
  });
}

async function start() {
  await connect(process.env.MONGO_URI);
  app.listen(PORT, () => {
    console.log(`[server] listening on http://localhost:${PORT}`);
  });
}

module.exports = app;

if (require.main === module) {
  start().catch((error) => {
    console.error(`[server] failed to start: ${error.message}`);
    process.exit(1);
  });
}
