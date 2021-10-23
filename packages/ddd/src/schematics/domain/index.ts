import { Schema } from './schema';
import { shell } from './shell';
import { convertNxGenerator, Tree } from '@nrwl/devkit';
import { normalizeSchema } from './normalize-schema';
import { application } from './application';
import { domain } from './domain';
import { infrastructure } from './infrastructure';
import { addDomainToLintingRules } from './add-domain-to-linting-rules';
import { formatFiles } from '@nrwl/workspace';

export async function domainGenerator(
  tree: Tree,
  schema: Schema
): Promise<void> {
  const normalizedOptions = normalizeSchema(tree, schema);

  addDomainToLintingRules(tree, normalizedOptions.domainName);

  await shell(tree, normalizedOptions);
  await application(tree, normalizedOptions);
  await domain(tree, normalizedOptions);
  await infrastructure(tree, normalizedOptions);

  await formatFiles();
}

const domainSchematic = convertNxGenerator(domainGenerator);

export default domainSchematic;
