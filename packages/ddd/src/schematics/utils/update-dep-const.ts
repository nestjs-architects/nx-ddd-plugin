import { checkRuleExists } from './check-rule-exists';
import { Tree } from '@nrwl/devkit';

export function updateDepConst(
  tree: Tree,
  update: (depConst: Array<object>) => void
) {
  let filePath = 'tslint.json';
  let rule = 'nx-enforce-module-boundaries';

  if (!tree.exists('tslint.json')) {
    if (tree.exists('.eslintrc.json')) {
      filePath = '.eslintrc.json';
      rule = '@nrwl/nx/enforce-module-boundaries';
    } else if (tree.exists('.eslintrc')) {
      filePath = '.eslintrc';
      rule = '@nrwl/nx/enforce-module-boundaries';
    } else {
      return;
    }
  }

  const text = tree.read(filePath).toString();
  const json = JSON.parse(text);
  let rules = json;
  if (rules['overrides']) {
    const overrides = rules['overrides'];
    rules = overrides.find(
      (e) => e.rules && e.rules['@nrwl/nx/enforce-module-boundaries']
    );
  }

  if (!checkRuleExists(filePath, rule, rules)) return;

  const depConst = rules['rules'][rule][1]['depConstraints'] as Array<object>;
  update(depConst);

  const newText = JSON.stringify(json, undefined, 2);
  tree.write(filePath, newText);
}
