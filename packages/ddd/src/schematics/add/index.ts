import { initLintingRules } from './init-linting-rules';
import { convertNxGenerator, Tree } from '@nrwl/devkit';

export function addGenerator(tree: Tree): void {
  initLintingRules(tree);
}

const addSchematic = convertNxGenerator(addGenerator);

export default addSchematic;
