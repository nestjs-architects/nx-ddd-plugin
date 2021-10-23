import { strings } from '@angular-devkit/core';
import { Schema } from './schema';
import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';

export default function(schema: Schema): Rule {

  const {domainNameAndDirectory, domainName} = parseSchema(schema);
  return chain([
    externalSchematic('@nrwl/nest', 'lib', {
      name: 'domain',
      directory: domainNameAndDirectory,
      tags: `domain:${domainName},type:domain`,
      publishable: schema.type === 'publishable',
      buildable: schema.type === 'buildable',
      importPath: schema.importPath,
      strict: true
    }),
    externalSchematic('@nrwl/nest', 'lib', {
      name: 'application',
      directory: domainNameAndDirectory,
      tags: `domain:${domainName},type:application`,
      publishable: schema.type === 'publishable',
      buildable: schema.type === 'buildable',
      importPath: schema.importPath,
      strict: true,
      service: true
    }),
    externalSchematic('@nrwl/nest', 'lib', {
      name: 'infrastructure',
      directory: domainNameAndDirectory,
      tags: `domain:${domainName},type:infrastructure`,
      publishable: schema.type === 'publishable',
      buildable: schema.type === 'buildable',
      importPath: schema.importPath,
      strict: true
    }),
    externalSchematic('@nrwl/nest', 'lib', {
      name: 'shell',
      directory: domainNameAndDirectory,
      tags: `domain:${domainName},type:shell`,
      publishable: schema.type === 'publishable',
      buildable: schema.type === 'buildable',
      importPath: schema.importPath,
      strict: true
    })
  ])
}

function parseSchema(schema:Schema): CalculatedOptions {
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

  return {
    domainName,
    domainNameAndDirectory
  }
}


interface CalculatedOptions {domainNameAndDirectory: string, domainName: string}
