import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';
import { NormalizedOptions } from '../normalized-options';
import { deleteFiles } from './delete-files';
import { Tree } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/nest';
import { createFiles } from './create-files';

export async function shell(
  tree: Tree,
  options: NormalizedOptions
): Promise<void> {
  await libraryGenerator(tree, {
    name: 'shell',
    directory: options.domainNameAndDirectory,
    tags: `domain:${options.domainName},type:shell`,
    publishable: options.publishable,
    buildable: options.buildable,
    importPath: options.importPath,
    strict: true,
  });
  deleteFiles(tree, options);
  createFiles(tree, options);
}
