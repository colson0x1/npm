/* Defines the 'PackageSummary' interface */

/*
 * https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md#get-v1search
 */
export interface PackageSummary {
  name: string;
  version: number;
  description: string;
  // If a package on npm does not have keywords, we don't get an empty array,
  // instead this list of keywords just doesn't exist
  // using ? tells TS, that the keywords property may or maynot be present and
  // we don't really know ahead of time
  // The documentation doesn't tell us that
  keywords?: string[];
}
