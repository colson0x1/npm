import type { PackageDetails } from '../types/packageDetails';

const FEATURED_PACKAGES = ['react', 'typescript', 'esbuild', 'vite'];

export async function getFeaturedPackages() {
  // When we map with an async function, what we get back is an array of
  // promises. we don't get back the actual data that we want
  const promises = FEATURED_PACKAGES.map(async (name) => {
    const res = await fetch(`https://registry.npmjs.org/${name}`);
    return res.json();
  });
  // fetching packages in parallel
  const data = await Promise.all(promises);

  // data is gonna be an array of PackageDetails objects
  return data as PackageDetails[];
}
