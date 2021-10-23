import { NormalizedOptions } from '../normalized-options';
import { Tree } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/nest';

export async function infrastructure(
  tree: Tree,
  options: NormalizedOptions
): Promise<void> {
  await libraryGenerator(tree, {
    name: 'infrastructure',
    directory: options.domainNameAndDirectory,
    tags: `domain:${options.domainName},type:infrastructure`,
    publishable: options.publishable,
    buildable: options.buildable,
    importPath: options.importPath,
    strict: true,
  });
}
