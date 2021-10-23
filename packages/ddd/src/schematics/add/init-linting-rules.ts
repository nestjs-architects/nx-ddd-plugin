import { updateDepConst } from '../utils/update-dep-const';
import { Tree } from '@nrwl/devkit';

/**
 * initLintingRules
 * initialize the linting rules to enforce dependency constraints inside tslint.jsonk
 */

export function initLintingRules(tree: Tree): void {
  updateDepConst(tree, (depConst) => {
    const jokerIndex = depConst.findIndex(
      (entry) =>
        entry['sourceTag'] &&
        entry['sourceTag'] === '*' &&
        entry['onlyDependOnLibsWithTags'] &&
        Array.isArray(entry['onlyDependOnLibsWithTags']) &&
        entry['onlyDependOnLibsWithTags'].length > 0 &&
        entry['onlyDependOnLibsWithTags'][0] === '*'
    );

    if (jokerIndex !== -1) {
      depConst.splice(jokerIndex, 1);
    }

    depConst.push({
      sourceTag: 'type:app',
      onlyDependOnLibsWithTags: ['type:ui'],
    });

    depConst.push({
      sourceTag: 'type:ui',
      onlyDependOnLibsWithTags: [
        'type:infrastructure',
        'type:domain',
        'type:application',
        'type:shell',
      ],
    });

    depConst.push({
      sourceTag: 'type:shell',
      onlyDependOnLibsWithTags: [
        'type:application',
        'type:infrastructure',
        'type:domain',
        'type:util',
      ],
    });

    depConst.push({
      sourceTag: 'type:application',
      onlyDependOnLibsWithTags: [
        'type:application',
        'type:domain',
        'type:util',
      ],
    });

    depConst.push({
      sourceTag: 'type:domain',
      onlyDependOnLibsWithTags: ['type:domain', 'type:util'],
    });

    depConst.push({
      sourceTag: 'type:infrastructure',
      onlyDependOnLibsWithTags: [
        'type:application',
        'type:domain',
        'type:infrastructure',
        'type:util',
      ],
    });

    depConst.push({
      sourceTag: 'type:util',
      onlyDependOnLibsWithTags: ['type:util'],
    });

    depConst.push({
      sourceTag: 'domain:shared',
      onlyDependOnLibsWithTags: ['domain:shared'],
    });
  });
}
