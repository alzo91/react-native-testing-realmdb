import Realm from "realm";

import { getSchemas } from "./schemas";

const DATABASE_PATH = "localDb.realm";

const DATABASE_SCHEMA_VERSION = 2;

const realm = new Realm({
  path: DATABASE_PATH,
  schema: getSchemas(),
  schemaVersion: DATABASE_SCHEMA_VERSION,
});

console.log(`[REALM] ${realm.path}`);

export { realm };
