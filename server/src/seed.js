/**
 * Upserts the canonical site content into MongoDB.
 * Usage: npm run seed  (requires MONGO_URI reachable)
 */
const mongoose = require("mongoose");
const { SITE_CONTENT } = require("./seedData");
const SiteContent = require("./models/SiteContent");

async function main() {
  const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/qronos";
  await mongoose.connect(uri, { serverSelectionTimeoutMS: 8000 });
  const doc = await SiteContent.findOneAndUpdate(
    { key: "site" },
    { key: "site", data: SITE_CONTENT },
    { upsert: true, new: true },
  );
  const keys = doc && doc.data ? Object.keys(doc.data).length : 0;
  console.log(`[seed] upserted site content (${keys} top-level keys)`);
  await mongoose.disconnect();
}

main().catch((error) => {
  console.error(`[seed] failed: ${error.message}`);
  process.exit(1);
});
