const toTypeScript = require('json-schema-to-typescript');
const fs = require('fs');

toTypeScript
  .compileFromFile('packages/ddd/src/schematics/domain/schema.json')
  .then((ts) =>
    fs.writeFileSync('packages/ddd/src/schematics/domain/schema.ts', ts)
  );
