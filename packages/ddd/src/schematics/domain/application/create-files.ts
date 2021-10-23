import type { Tree } from '@nrwl/devkit';
import {
  generateFiles,
  joinPathFragments,
  names,
  offsetFromRoot,
} from '@nrwl/devkit';
import type { NormalizedOptions } from '../normalized-options';

export function createFiles(tree: Tree, options: NormalizedOptions): void {
  const substitutions = {
    ...options,
    ...names(options.projectName),
    tmpl: '',
    offsetFromRoot: offsetFromRoot(options.domainRoot),
    className: options.className,
  };
  generateFiles(
    tree,
    joinPathFragments(__dirname, 'files'),
    joinPathFragments(options.domainRoot, 'application', 'src', 'lib'),
    substitutions
  );
}
