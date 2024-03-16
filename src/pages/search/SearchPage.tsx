import type { SearchLoaderResult } from './searchLoader';
import { useLoaderData } from 'react-router-dom';

export default function SearchPage() {
  // This hook automatically assign whatever value we returned from
  // searchLoader, so its going to assign that object to this data variable
  /* const data = useLoaderData() as { searchResults: PackageSummary[] }; */

  // Better solution that scales to larger projects
  // Now we get TypeScript error, when trying to access wrong prop on data
  const data = useLoaderData() as SearchLoaderResult;
  console.log('Search Page', data.searchResults);

  return <div>Search Page</div>;
}
