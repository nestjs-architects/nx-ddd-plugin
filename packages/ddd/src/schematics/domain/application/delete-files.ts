import type { Tree } from '@nrwl/devkit';
import { joinPathFragments } from '@nrwl/devkit';
import type { NormalizedOptions } from '../normalized-options';

export function deleteFiles(tree: Tree, options: NormalizedOptions): void {
  tree.delete(
    joinPathFragments(
      options.domainRoot,
      'application',
      'src',
      'lib',
      `${options.fileName}-application.module.ts`
    )
  );
}
