import { NormalizedOptions } from './normalized-options';
import { Schema } from './schema';
import { strings } from '@angular-devkit/core';
import { getWorkspaceLayout, Tree } from '@nrwl/devkit';

export function normalizeSchema(tree: Tree, schema: Schema): NormalizedOptions {
  const domainName = strings.dasherize(schema.name);
  const domainNameAndDirectory = schema.directory
    ? `${schema.directory}/${domainName}`
    : domainName;
  const domainNameAndDirectoryDasherized = strings
    .dasherize(domainNameAndDirectory)
    .split('/')
    .join('-');
  const libFolderPath = `libs/${domainNameAndDirectory}`;
  const libLibFolder = `${libFolderPath}/domain/src/lib`;
  const { npmScope } = getWorkspaceLayout(tree);

  return {
    projectName: domainNameAndDirectoryDasherized,
    domainNameAndDirectory: domainNameAndDirectory,
    domainName,
    publishable: schema.type === 'publishable',
    buildable: schema.type === 'buildable',
    importPath: schema.importPath,
    fileName: domainNameAndDirectoryDasherized,
    domainRoot: libFolderPath,
    className: strings.classify(domainNameAndDirectoryDasherized),
    workspacePrefix: npmScope,
  };
}
