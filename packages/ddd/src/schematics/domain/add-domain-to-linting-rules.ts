/**
 * addDomainToLintingRules
 * @param domainName name of the domain that is being included in the tslint.json
 */
import { updateDepConst } from '../utils/update-dep-const';
import { Tree } from '@nrwl/devkit';

export function addDomainToLintingRules(tree: Tree, domainName: string): void {
  updateDepConst(tree, (depConst) => {
    depConst.push({
      sourceTag: `domain:${domainName}`,
      onlyDependOnLibsWithTags: [`domain:${domainName}`, 'domain:shared'],
    });
  });
}
