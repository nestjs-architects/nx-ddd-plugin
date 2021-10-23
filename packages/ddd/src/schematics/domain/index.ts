import { Schema } from './schema';
import { shell } from './shell';
import { convertNxGenerator, Tree } from '@nrwl/devkit';
import { normalizeSchema } from './normalize-schema';
import { application } from './application';
import { domain } from './domain';
import { infrastructure } from './infrastructure';

export async function domainGenerator(
  tree: Tree,
  schema: Schema
): Promise<void> {
  const normalizedOptions = normalizeSchema(tree, schema);
  await shell(tree, normalizedOptions);
  await application(tree, normalizedOptions);
  await domain(tree, normalizedOptions);
  await infrastructure(tree, normalizedOptions);
}

const domainSchematic = convertNxGenerator(domainGenerator);

export default domainSchematic;
