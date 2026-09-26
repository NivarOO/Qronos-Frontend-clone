const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

/**
 * Connects to MongoDB. Never throws — returns { connected } so the
 * API can fall back to in-memory seed content when no database
 * is reachable (e.g. local dev without mongod running).
 */
async function connect(uri) {
  if (!uri) {
    console.warn("[db] MONGO_URI not set — running on in-memory content");
    return { connected: false };
  }
  try {
    await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
    console.log("[db] connected to MongoDB");
    return { connected: true };
  } catch (error) {
    console.warn(`[db] connection failed (${error.message}) — running on in-memory content`);
    return { connected: false };
  }
}

function isConnected() {
  return mongoose.connection.readyState === 1;
}

module.exports = { connect, isConnected };
