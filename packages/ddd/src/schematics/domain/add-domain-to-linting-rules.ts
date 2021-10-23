/**
 * addDomainToLintingRules
 * @param domainName name of the domain that is being included in the tslint.json
 */ import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { updateDepConst } from '../utils/update-dep-const';

export function addDomainToLintingRules(domainName: string): Rule {
  return (host: Tree, context: SchematicContext) => {
    updateDepConst(host, context, (depConst) => {
      depConst.push({
        sourceTag: `domain:${domainName}`,
        onlyDependOnLibsWithTags: [`domain:${domainName}`, 'domain:shared'],
      });
    });
  };
}
