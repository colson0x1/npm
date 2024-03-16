import type { SearchLoaderResult } from './searchLoader';
import { useLoaderData } from 'react-router-dom';
import PackageListItem from '../../components/PackageListItem';

export default function SearchPage() {
  // This hook automatically assign whatever value we returned from
  // searchLoader, so its going to assign that object to this data variable
  /* const data = useLoaderData() as { searchResults: PackageSummary[] }; */

  // Better solution that scales to larger projects
  // Now we get TypeScript error, when trying to access wrong prop on data
  const { searchResults } = useLoaderData() as SearchLoaderResult;
  // console.log('Search Page', data.searchResults);

  const renderedResults = searchResults.map((result) => {
    // package name of NPM has to be unique so we can use that as a key
    return <PackageListItem pack={result} key={result.name} />;
  });

  return (
    <div>
      <h1 className='text-2xl font-bold my-6'>Search Results</h1>
      <div className='space-y-4 mt-4 '>{renderedResults}</div>
    </div>
  );
}
