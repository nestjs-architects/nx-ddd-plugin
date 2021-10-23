import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';
import { NormalizedOptions } from '../normalized-options';
import { deleteFiles } from './delete-files';
import { Tree } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/nest';
import { createFiles } from './create-files';

export async function application(
  tree: Tree,
  options: NormalizedOptions
): Promise<void> {
  await libraryGenerator(tree, {
    name: 'application',
    directory: options.domainNameAndDirectory,
    tags: `domain:${options.domainName},type:application`,
    publishable: options.publishable,
    buildable: options.buildable,
    importPath: options.importPath,
    service: true,
    strict: true,
  });
  deleteFiles(tree, options);
  createFiles(tree, options);
}
