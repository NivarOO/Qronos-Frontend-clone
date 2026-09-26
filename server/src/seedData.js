/**
 * Canonical site content for the API + database seed.
 * Values are auto-generated from client/src/lib/data.ts (transpiled,
 * type annotations erased) so the API serves exactly what the UI used.
 * Regenerate after editing data.ts:
 *   npx tsc client/src/lib/data.ts --ignoreConfig --outDir .tmp-seed \
 *     --module commonjs --target es2020 --skipLibCheck
 *   move .tmp-seed/data.js server/src/contentValues.js
 */
const values = require("./contentValues");

const SITE_CONTENT = { ...values };

module.exports = { SITE_CONTENT };
