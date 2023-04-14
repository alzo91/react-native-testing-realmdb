import * as Schemas from "../schemas";

/** Map 'Schemas' object from ./schemas/index.ts to a schema array. */
export const getSchemas = () => {
  const schemas = [];
  for (const schemaName in Schemas) {
    // @ts-ignore
    schemas.push(Schemas[schemaName].schema);
  }
  return schemas;
};
