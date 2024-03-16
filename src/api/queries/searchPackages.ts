/* Contains a function to make the actual API request */
import type { PackageSummary } from '../types/packageSummary';

interface SearchResponse {
  objects: {
    package: {
      name: string;
      description: string;
      version: number;
      keywords: string[];
    };
  }[];
}

export async function searchPackages(term: string): Promise<PackageSummary[]> {
  // Inside searchPackage, we need to make request off of that API,
  // use a Type Assertion to help TypeScript understand the type of data
  // we're getting back and then
  // map that response and make sure that we return an array of PackageSummary
  // objects

  const res = await fetch(
    `https://registry.npmjs.org/-/v1/search?text=${term}`,
  );
  const data: SearchResponse = await res.json();

  // Take a look at this data, map over the objects property and turn it into
  // an array of PackageSummary objects and then return that
  return data.objects.map(
    ({ package: { name, description, version, keywords } }) => {
      return {
        name,
        description,
        version,
        keywords,
      };
    },
  );
}
