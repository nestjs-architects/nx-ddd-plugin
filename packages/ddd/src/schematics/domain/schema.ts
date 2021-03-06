/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Schema {
  /**
   * Grouping name for the Domain
   */
  name: string;
  /**
   * Subpath of the domain within libs directory
   */
  directory?: string;
  /**
   * Use CQRS in Application Module
   */
  cqrs?: boolean;
  /**
   * A type to determine if and how to build libraries.
   */
  type?: "internal" | "buildable" | "publishable";
  /**
   * For publishable libs: Official package name used in import statements
   */
  importPath?: string;
  [k: string]: unknown;
}
