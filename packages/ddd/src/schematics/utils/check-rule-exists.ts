import { SchematicContext } from '@angular-devkit/schematics';

export function checkRuleExists(filePath: string, rule: string, rules: object) {
  if (!rules['rules']) {
    throw new Error(`${filePath}: rules expected`);
  }

  if (!rules['rules'][rule]) {
    throw new Error(`${filePath}: ${rule} expected`);
  }

  if (rules['rules'][rule]['length'] < 2) {
    throw new Error(`${filePath}: ${rule}.1 unexpected`);
  }

  if (!rules['rules'][rule][1]['depConstraints']) {
    throw new Error(`${filePath}: ${rule}.1.depConstraints expected.`);
  }

  if (!Array.isArray(rules['rules'][rule][1]['depConstraints'])) {
    throw new Error(
      `${filePath}: ${rule}.1.depConstraints expected to be an array.`
    );
  }

  return true;
}
